import { EventEmitter } from 'events';
import io from 'socket.io-client';

export class RTTClient extends EventEmitter {
  socket: SocketIOClient.Socket;
  events = new EventEmitter();
  constructor(url: string) {
    super();
    this.socket = io(url);
  }

  _bindEvents() {
    const { socket } = this;
    this.socket.on('connection', (socket: SocketIOClient.Socket) => {
      this.emit('connection', socket);
    });
  }
}
