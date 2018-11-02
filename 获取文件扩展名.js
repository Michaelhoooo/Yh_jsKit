function getSuffix(file_name) {
  var result = /[^\.]+$/.exec(file_name);
  return result;
}

getSuffix('1234.png') // ["png", index: 5, input: "1234.png"]
getSuffix('1231344.file'); // ["file", index: 8, input: "1231344.file"]
