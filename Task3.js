function next_binary_number(binaryArr) {
  let zeroFound = false;
  // Reverse loop
  for (let index = binaryArr.length - 1; index > 0; index--) {
    const currentBit = binaryArr[index];
    if (currentBit === 0 && !zeroFound) {
      zeroFound = true;
      if (binaryArr[index + 1] === 1) {
        binaryArr[index + 1] = 0;
      }
      binaryArr[index] = 1;
      return binaryArr;
    }
  }
  if (!zeroFound) {
    const nextBinary = [1];
    for (let index = 0; index < binaryArr.length; index++) {
      nextBinary.push(0);
    }
    return nextBinary;
  }
}
