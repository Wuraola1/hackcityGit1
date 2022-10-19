const convertToCaps = (str) => {
    console.log(str);
    let newString = "";
    for (let i = 0; i <= str.length; i++) {
        newString = str.toUpperCase();
    }
    return newString;
};
console.log(convertToCaps("yomi"));