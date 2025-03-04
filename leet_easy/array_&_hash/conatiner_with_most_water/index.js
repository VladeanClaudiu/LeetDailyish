const maxArea = (heights) => {
  //brute force solution
  //   let maxValue = 0;

  //   for (let i = 0; i < heights.length; i++) {
  //     //console.log(heights[i])
  //     for (let k = i + 1; k < heights.length; k++) {
  //       if (heights[i] <= heights[k]) {
  //         const diff = k - i;
  //         const currArea = heights[i] * diff;
  //         if (maxValue < currArea) {
  //           maxValue = currArea;
  //         }
  //       } else {
  //         const diff = k - i;
  //         const currArea = heights[k] * diff;
  //         if (maxValue < currArea) {
  //           maxValue = currArea;
  //         }
  //       }
  //     }
  //   }

  //   return maxValue;

  //two pointer solution

  let pointer1 = 0;
  let pointer2 = heights.length - 1;

  let maxValue = 0;

  while (pointer2 - pointer1 > 0) {
    let xValue = pointer2 - pointer1;
    let pointer1Value = heights[pointer1];
    let pointer2Value = heights[pointer2];

    console.log(pointer1Value);
    console.log(pointer2Value);
    console.log(xValue);

    if (pointer1Value <= pointer2Value) {
      if (maxValue < pointer1Value * xValue) {
        maxValue = pointer1Value * xValue;
        console.log("Max Value :", maxValue);
      }
      pointer1 = pointer1 + 1;
    } else {
      if (maxValue < pointer2Value * xValue) {
        maxValue = pointer2Value * xValue;
        console.log("Max Value :", maxValue);
      }
      pointer2 = pointer2 - 1;
    }
  }

  return maxValue;
};
