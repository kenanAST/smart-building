# Smart Building App Documentation

The Smart Building App is a web application that combines Node-RED, React, and Three.js to create an interactive 3D building visualization and control system. The app allows users to monitor the building's lights and voltage usage through a user-friendly interface.

## Architecture

The application follows a client-server architecture, with the following components:

1. **Client-side**:

   - **React**: The front-end framework responsible for rendering the user interface and displaying the 3D building model.
   - **Three.js**: A 3D graphics library used to render the 3D building model and visualize the state of the lights.

2. **Server-side**:

   - **Node-RED**: A flow-based programming tool used for wiring together hardware devices, APIs, and online services. In this application, Node-RED is responsible for controlling the building's lights and monitoring the voltage usage.

3. **WebSocket**: A full-duplex communication protocol that enables real-time communication between the client and the server. It is used to establish a persistent connection between React and Node-RED, allowing for seamless data exchange.

## Data Flow

The data flow in the Smart Building App follows this sequence:

1. Node-RED controls the building's lights and monitors the voltage usage.
2. Node-RED sends the updated data to React through the WebSocket connection.
3. React receives the updated data and updates the 3D building model in Three.js to reflect the current state of the lights and display the voltage usage information.

![Data Flow Diagram](./flow.png)

## Installation and Setup

To run the Smart Building App locally, follow these steps:

1. Clone the repository from the provided source code location.
2. Install the required dependencies for the React and Node-RED components by following the instructions in their respective README files.
3. Configure the WebSocket connection settings in both the React and Node-RED components to ensure proper communication.
4. Start the Node-RED server and the React development server.
5. Access the application through the provided URL or localhost address.

## Usage

Once the Smart Building App is running, the 3D building model in Three.js will update in real-time to reflect the changes in the building's lights and display the voltage usage information.

![Usage Example](./usage.png)

## Contributing

If you wish to contribute to the Smart Building App project, please follow the guidelines outlined in the CONTRIBUTING.md file located in the repository.

## License

The Smart Building App is released under the [MIT License](https://opensource.org/licenses/MIT). See the LICENSE file for more details.

## Support

If you encounter any issues or have questions regarding the Smart Building App, please refer to the project's documentation or reach out to the development team for assistance.
