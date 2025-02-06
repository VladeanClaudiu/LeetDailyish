/**
 * @param {string[]} strs
 * @returns {string}
 */
const encode = (strs) => {
  if (strs && strs.length > 0 && strs[0].length) {
    const enchodedString = strs
      .map((item) => item.split("").map((char) => char.charCodeAt(0)))
      .join("/");

    return String(enchodedString);
  } else {
    return strs;
  }
};

/**
 * @param {string} str
 * @returns {string[]}
 */
const decode = (str) => {
  if (str && str.length > 0 && str[0].length) {
    console.log(str);
    const decodedString = str
      .split("/")
      .map((item) => item.split(",").map((number) => Number(number)))
      .map((arr) => String.fromCharCode(...arr));
    console.log(decodedString);

    return decodedString;
  } else {
    return str;
  }
};
