/* eslint-disable */
const divideArray = (bulkArray: any[]) => {
  const result = [];
  const length = bulkArray.length;
  let startIndex = 0;

  while (startIndex < length) {
    const endIndex = Math.min(startIndex + 5000, length);
    const group = bulkArray.slice(startIndex, endIndex);
    result.push(group);
    startIndex += 5000;
  }

  return result;
};

export { divideArray };
