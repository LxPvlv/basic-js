module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) return 0;
    const filtered = arr.filter(Array.isArray)
    if(filtered.length ===0) return 1

    return Math.max(...filtered.map(a=>this.calculateDepth(a)+1))
  }
};
