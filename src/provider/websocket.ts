import { IWebSocketService, Message } from "./interfaces";


class WebSocketService implements IWebSocketService {
  socketRef: WebSocket | null = null;
  static instance: WebSocketService | null = null;
  callbacks: Map<any, any> | null = null;
  static getInstance() {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect(URL: string) {
    console.log(URL);
    this.socketRef = new WebSocket(URL);
    this.socketRef.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    this.socketRef.onmessage = (event) => {
      const message: Message = JSON.parse(event.data);
      // handleIncomingMessage(message);
      this.callbacks?.get("new_message")(message);
      console.log(event.data);
    };
  }

  newChatMessage(chatMessage: Message) {
    this.socketRef?.send(JSON.stringify(chatMessage));
  }

  addCallbacks(newMessageCallbacks: (body: any) => void) {
    this.callbacks = new Map([["new_message", newMessageCallbacks]]);
  }
}

const WebSocketInstance = WebSocketService.getInstance();
export default WebSocketInstance;
