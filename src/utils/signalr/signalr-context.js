

'use client'; // This directive ensures the component is rendered only on the client side

import React, { createContext, useState, useEffect, useContext } from 'react';
import { createHubConnection } from 'src/utils/signalr/signalr-hub';
import { CONFIG } from 'src/config-global';

// Create the context
const SignalRContext = createContext();


// Solution 1
// Create a provider component
export const SignalRProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const SIGNALR_URL = CONFIG.serverApi.Url + CONFIG.serverApi.SignalR.Hub;

  useEffect(() => {
    const connection = createHubConnection(SIGNALR_URL);

    connection.start()
      .then(() => {
        console.log('SignalR connected');
        connection.on(CONFIG.serverApi.SignalR.Chanel, (message) => {
          setMessage(message);
        });
      })
      .catch(err => console.error('Error sconnecting to SignalR:', err));

    return () => {
      connection.off('ReceiveMessage');
      connection.stop();
    };
  }, [SIGNALR_URL]);

  return (
    <SignalRContext.Provider value={message}>
      {children}
    </SignalRContext.Provider>
  );
};

// Custom hook to use the SignalR context
export const useSignalRContext = () => {
  return useContext(SignalRContext)
};


// // Solution 2
// // Create a provider component
// export const SignalRProvider = ({ children }) => {
//   const [hubConnection, setHubConnection] = useState(null);
//   const SIGNALR_URL = CONFIG.serverApi.Url + CONFIG.serverApi.SignalR.Hub;

//   useEffect(() => {
//     const connection = createHubConnection(SIGNALR_URL);

//     connection.start()
//       .then(() => {
//         console.log('SignalR connected');
//         setHubConnection(connection);
//       })
//       .catch(err => console.error('Error sconnecting to SignalR:', err));

//     return () => {
//       connection.stop();
//     };
//   }, [SIGNALR_URL]);

//   return (
//     <SignalRContext.Provider value={hubConnection}>
//       {children}
//     </SignalRContext.Provider>
//   );
// };

// // Custom hook to use the SignalR context
// export const useSignalRContext = () => {
//   return useContext(SignalRContext)
// };

// Example for use page
// const hubConnection = useSignalR();
// useEffect(() => {
//   if (hubConnection) {
//     // Example: Subscribe to messages
//     hubConnection.on('ReceiveMessage', (message) => {
//       console.log('Message received:', message);
//     });
//     return () => {
//       hubConnection.off('ReceiveMessage');
//     };
//   }
// }, [hubConnection]);