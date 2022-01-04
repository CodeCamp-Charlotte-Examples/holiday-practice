class SantasBag {

  constructor (gifts = []) {
    this.contents = {};

    for (let i = 0; i < gifts.length; i++) {
      let gift = gifts[i];

      if (this.contents[gift.recipient] === undefined) {
        this.contents[gift.recipient] = [];
      }

      this.contents[gift.recipient].push(gift);
    }
  }

  getGifts(recipient) {
    
    if (this.contents[recipient] === undefined) {
      return [];
    }

    return this.contents[recipient];
  }

}

module.exports = SantasBag;