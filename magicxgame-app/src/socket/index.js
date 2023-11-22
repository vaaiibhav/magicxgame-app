import { io } from "socket.io-client";
import { serverURL, serverHost, serverPort } from "../constants";

// "undefined" means the URL will be computed from the `window.location` object

const socket = io(serverURL, {
  auth: { token: localStorage.getItem("blueFighter.authToken") },
});
export { socket };
