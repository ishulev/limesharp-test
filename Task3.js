function next_binary_number(binaryArr) {
  let zeroFound = false;
  for (let index = 0; index < binaryArr.length; index++) {
    const currentBit = binaryArr[index];
    if (currentBit === 0) {
      zeroFound = true;
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
