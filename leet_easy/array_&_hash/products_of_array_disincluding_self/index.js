
const productExceptSelf = (nums) => {
  //declare the final array
  const finalArray = [];
  //loop through each value in array
  for (let i = 0; i < nums.length; i++) {
    let value = 1;

    for (let k = 0; k < nums.length; k++) {
      if (i !== k) {
        console.log("nums :" + nums[k]);
        value = value * nums[k];
      }
    }
    finalArray.push(value);
  }

  return finalArray;
};
