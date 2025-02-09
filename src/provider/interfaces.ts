export interface Message {
  author: string | null;
  body: string;
  variant: "chat" | "connection";
  imageUrl:string | null
}

export interface ConnectionMessage {
  type: "connection";
  clientId: string;
}

export interface IWebSocketService {
  socketRef: WebSocket | null;
  callbacks: Map<any, any> | null;
}
