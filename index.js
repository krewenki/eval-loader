module.exports = function(source) {
  this.cacheable();
  var module2 = {};
  source.replace('module.exports','module2.exports');
  var evaled = eval(source);
  return evaled.exports;
};
