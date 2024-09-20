import { HubConnectionBuilder } from '@microsoft/signalr';

export const createHubConnection = (url) => {
  return new HubConnectionBuilder()
    .withUrl(url)
    .withAutomaticReconnect()
    .build();
};