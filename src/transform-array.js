module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;

  const result = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if(j>0){
          result.pop()
          j--
        }
        break;
      case "--double-next":
        if (i+1 < arr.length) {
          result[j] = arr[i + 1];
          j++;
        }
        break;
      case "--double-prev":
        if(i!==0){
          result[j] = arr[i - 1];
          j++;
        }
        break;
      default:
        result[j] = arr[i];
        j++;
    }
  }

  return result;
};
