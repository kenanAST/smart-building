import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Cafe } from './assets/models/Cafe.jsx';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket.js';

const App = () => {
  const [bulbs, setBulbs] = useState([
    { bulb_id: 1, strength: 1, status: true },
  ]);

  const WS_URL = 'ws://127.0.0.1:8000';
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: (message) => {
      const newBulb = bulbs[0];
      newBulb.strength = message.data / 220;
      const updatedBulbs = [];
      updatedBulbs.push(newBulb);
      setBulbs(updatedBulbs);
    },
  });

  const [state, setState] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [],
      },
    ],
    colors: ['#F44336', '#FFFFFF', '#9C27B0'],
  });

  const getCurrentTimeStamp = () => {
    // Create a new Date object
    const now = new Date();

    // Get the current minute and second
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    // Format the values to ensure leading zeros for single-digit numbers
    const formattedMinute = String(currentMinute).padStart(2, '0');
    const formattedSecond = String(currentSecond).padStart(2, '0');

    // Concatenate the minute and second with a colon separator
    const currentTime = `${formattedMinute}:${formattedSecond}`;

    // Return the result
    return currentTime;
  };

  const SECOND_MS = 1000;
  const [time, setTime] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeStamps = time;
      newTimeStamps.push(getCurrentTimeStamp());
      setTime(newTimeStamps);

      const newData = data;
      newData.push(Math.round(bulbs[0].strength * 220));
      setData(newData);

      const newState = {
        options: {
          chart: {
            id: 'basic-bar',
          },
          xaxis: {
            categories: newTimeStamps,
          },
        },
        series: [
          {
            name: 'series-1',
            data: newData,
          },
        ],
        colors: ['#F44336', '#FFFFFF', '#9C27B0'],
      };

      setState(newState);
    }, SECOND_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <>
      <h1 style={{ paddingTop: '50px', marginBottom: 0, textAlign: 'center' }}>
        Threejs & Node Red Control Test
      </h1>

      <h2 style={{ textAlign: 'center' }}>Bulb1: {bulbs[0].strength * 220}</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div style={{ width: '60vw', height: '80vh' }}>
          <Canvas>
            <Cafe bulbs={bulbs} />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default App;
