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
          console.log("event:", event);
          socket.transmit("customRemoteEvent", "hEY");

          // Set up a loop to handle remote transmitted events.
          for await (let data of socket.receiver("gameTimer")) {
            console.log("gameTimer:", data);
            setTimer(data);
            // socket.transmit("customRemoteEvent", data + 123456);
          }
        }
      })();
      (async () => {
        let timerChannel = socket.subscribe("gameTimer");
        for await (let countdown of timerChannel) {
          console.log({ countdown });
          // ... Handle channel data.
        }
      })();
    }
    console.log("firstRender:", firstRender);
    connectSocket();
  }, [firstRender]);
};

export default useSocketState;
