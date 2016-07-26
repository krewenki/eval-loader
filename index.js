module.exports = function(source) {
  this.cacheable();

  return eval(source);
};
