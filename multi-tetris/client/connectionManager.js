class ConnectionManager {
  constructor(tetrisManager) {
    this.conn = null;
    this.peers = new Map;

    this.tetrisManager = tetrisManager;
  }

  connect(address) {
    this.conn = new WebSocket(address);

    this.conn.addEventListener('open', () => {
      console.log('conn established');
      this.initSession()
    });

    this.conn.addEventListener('message', e => {
      console.log(`received message: ${e.data}`);
      this.receive(e.data);
    });
  }

  send(data) {
    const msg = JSON.stringify(data);
    console.log(`Sending message ${msg}`);
    this.conn.send(msg);
  }

  updateManager(peers) {
    const me = peers.you;
    const clients = peers.clients.filter(id => me !== id);
    clients.forEach(id => {
      if (!this.peers.has(id)) {
        const tetris = this.tetrisManager.createPlayer();
        this.peers.set(id, tetris);
      }
    });

    [...this.peers.entries()].forEach(([id, tetris]) => {
      if (clients.indexOf(id) === -1) {
        this.tetrisManager.removeTetris(tetris);
        this.peers.delete(id);
      }
    });
  }

  receive(msg) {
    const data = JSON.parse(msg);
    if (data.type === 'session-created') {
      window.location.hash = data.id;
    } else if (data.type === 'session-broadcast') {
      this.updateManager(data.peers);
    }
  }

  initSession() {
    const sessionId = window.location.hash.split('#')[1];
    if (sessionId) {
      this.send({
        type: 'join-session',
        id: sessionId
      });
    } else {
      this.send({
        type: 'create-session',
      });
    }
  }
}
