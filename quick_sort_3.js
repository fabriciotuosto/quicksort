function eq(x){
  return function(item){
    return item === x;
  };
}
function gt(x){
  return function(item){
    return item > x;
  };
}

function lt(x){
  return function (item){
    return item < x;
  };
}

function isSorted(array){
  return  array.length < 1000 && array.reduce(function(prev, current, index, array){
    if(index+1 == array.length) return prev;
    return prev && current < array[index+1]
  }, true);
}

function filter(array, filter){
  return array.filter(filter);
}

function quicksort(array){
  if(array.length === 0) return [];
  if(array.length === 1) return array;
  if(isSorted(array)) return array;

  var index    = Math.ceil(array.length / 2.0);
  var value    = array[index];

  var values = filter(array, eq(value));
  var left   = filter(array, lt(value));
  var right  = filter(array, gt(value));
  return quicksort(left)
    .concat(values)
    .concat(quicksort(right));
}

module.exports = quicksort;