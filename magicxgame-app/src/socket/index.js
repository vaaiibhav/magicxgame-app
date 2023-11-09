import socketCluster from "socketcluster-client";
import { serverHost, serverPort } from "../constants";

const initializeSocketCluster = () => {
  let options = {
    connectTimeout: 10000, //milliseconds
    ackTimeout: 10000, //milliseconds
    channelPrefix: null,
    autoReconnectOptions: {
      initialDelay: 10000, //milliseconds
      randomness: 10000, //milliseconds
      multiplier: 1.5, //decimal
      maxDelay: 60000, //milliseconds
    },
    hostname: serverHost, // Replace with your server's hostname or IP
    port: serverPort, // Replace with your se
  };
  try {
    const socket = socketCluster.create(options);
    // Handle other events and data as needed
    return socket;
  } catch (error) {
    console.error("SocketCluster initialization error:", error);
    return null; // Return null or handle the error as needed in your application
  }
};

export default initializeSocketCluster;
