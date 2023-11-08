import { useEffect } from "react";
import { useGameStore } from "../states/store";
const useSocketState = async (socket) => {
  const { setTimer } = await useGameStore();

  if (socket) {
    (async () => {
      for await (let { error } of socket.listener("error")) {
        console.error(error);
      }
    })();
    (async () => {
      for await (let event of socket.listener("connect")) {
        if (event.id) {
          for await (let timeSecond of socket.receiver("gameTimer")) {
            setTimer(timeSecond);
          }
        }
      }
    })();
  }
};

export default useSocketState;

// console.log("socket:", socket);
// (async () => {
//   for await (let { error } of socket.listener("error")) {
//     console.error(error);
//   }
// })();

// (async () => {
//   for await (let event of socket.listener("connect")) {
//     console.log("Socket is connected", event);
//     (async () => {
//       // Set up a loop to handle remote transmitted events.
//       for await (let data of socket.receiver("customRemoteEvent")) {
//         console.log("data:", data);
//         socket.transmit("customRemoteEvent", data + 123456);
//       }
//     })();
//   }
// });

// You can now use the 'socket' object for your real-time functionality

// export default socket;
