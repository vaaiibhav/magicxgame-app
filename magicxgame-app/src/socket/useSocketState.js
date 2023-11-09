import { useGameStore } from "../states/store";
import initializeSocketCluster from ".";
import { useEffect, useState } from "react";
const useSocketState = () => {
  const { setTimer } = useGameStore();
  const [firstRender, setFirstRender] = useState(0);
  var socket;
  useEffect(() => {
    async function connectSocket() {
      socket = await initializeSocketCluster();
      (async () => {
        for await (let { error } of socket.listener("error")) {
          console.error(error);
        }
      })();
      (async () => {
        for await (let event of socket.listener("connect")) {
          (async () => {
            // Set up a loop to handle remote transmitted events.
            for await (let data of socket.receiver("gameTimer")) {
              setTimer(data);
              console.log("gameTimer:", data);
              // socket.transmit("customRemoteEvent", data + 123456);
            }
          })();
        }
      })();
    }
    console.log("firstRender:", firstRender);
    connectSocket();
  }, [firstRender]);
};

export default useSocketState;
