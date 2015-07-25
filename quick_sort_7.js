function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(array, lo, hi){
  var index    = Math.ceil((lo + hi) / 2.0);
  var pivot    = array[index];

  while( lo < hi && lo < index && index < hi){
    while(array[lo] < pivot) ++lo;
    while(array[hi] > pivot) --hi;
    if (array[lo] > array[hi]) {
      swap(array, lo, hi);
    }
      ++lo; --hi;
  }
  return index;
}
function doSort(items, left , right){
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      doSort(items, left, (index - 1));
    }
    if (index < right) {
      doSort(items, index, right);
    }
  }
  return items;
}


function quicksort(array){
  if(array.length === 0) return [];
  if(array.length === 1) return array;

  doSort(array, 0, (array.length-1));
  return array;
}

module.exports = quicksort;