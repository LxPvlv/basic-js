module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    return Math.max(
      depth,
      ...arr
        .filter(Array.isArray)
        .map(item => this.calculateDepth(item, depth + 1))
    );
  }
};
