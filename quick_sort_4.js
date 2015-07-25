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

function processArray(array){
  var result = { value : [], left  : [], right : []};

  var index    = Math.ceil(array.length / 2.0);
  var value    = array[index];

  var _eq = eq(value);
  var _lt = lt(value);
  var _gt = gt(value);
  array.forEach(function(item, i){
    if(_eq(item)) result.value.push(item);
    if(_lt(item)) result.left.push(item);
    if(_gt(item)) result.right.push(item);
  });

  return result;
}

function quicksort(array){
  if(array.length === 0) return [];
  if(array.length === 1) return array;

  var result = processArray(array);


  return quicksort(result.left)
    .concat(result.value)
    .concat(quicksort(result.right));
}

module.exports = quicksort;