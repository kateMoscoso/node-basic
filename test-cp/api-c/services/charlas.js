class CharlasService {
  constructor() {
    this.collection = 'charla';
  }

  async createCharla({ charla }) {
    return charla;
  }
}

module.exports = CharlasService;
