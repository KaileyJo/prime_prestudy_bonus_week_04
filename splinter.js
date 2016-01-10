var splinter = function (value, anotherValue) {
  var z = value * anotherValue;
  return [value, anotherValue, z];
};
console.log(splinter(1, 2));
