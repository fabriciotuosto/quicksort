function sort(array){
  return array.sort(function(x, y){
    return x - y;
  });
}
module.exports = sort