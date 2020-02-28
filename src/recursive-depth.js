module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    return Array.isArray(arr)
      ? arr.length === 0
        ? 1
        : 1 + Math.max(...arr.map(this.calculateDepth))
      : 0;
  }
};
