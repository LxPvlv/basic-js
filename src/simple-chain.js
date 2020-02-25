module.exports = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (Object.is(value, null)) value = "null";
    if (Object.is(value, NaN)) value = "NaN";

    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chain = [];
      throw Error;
    }

    if (position < 1 || position > this.chain.length) {
      this.chain = [];
      throw Error;
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const strChain = `( ${this.chain.join(" )~~( ")} )`;
    this.chain = [];
    return strChain;
  }
};
