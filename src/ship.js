function ship(name, length) {
  return {
    name,
    length,
    nHits: 0,
    hit() {
      this.nHits += 1;
      return this.nHits;
    },
    isSunk() {
      return !(this.length - this.nHits > 0);
    },
  };
}

export default ship;
