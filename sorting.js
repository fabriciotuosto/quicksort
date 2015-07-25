var sort          = require('./default.js');
var q_sort        = require('./quick_sort_1.js');
var q_sort_ps     = require('./quick_sort_2.js');
var q_sort_pst    = require('./quick_sort_3.js');
var q_sort_os     = require('./quick_sort_4.js');
var q_sort_ps_os  = require('./quick_sort_5.js');
var q_sort_pst_os = require('./quick_sort_6.js');
var q_sort_i      = require('./quick_sort_7.js');
var Benchmark     = require('benchmark').Benchmark;
var Benchtable    = require('benchtable');

function create_array(size) {
  function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  function range(stop) {
    var a = [1], b = 1;
    while (b < stop) {
      b += 1;
      a.push(b)
    }
    return a;
  };
  return shuffle(range(size));
}

function getSuiteTable(testName) {
  return new Benchtable(testName)
    .on('start', function () {
      console.log('Starting benchmarks.');
    }).on('cycle', function (event) {
      if (!event.target.error) {
        console.log(String(event.target));
      }
    }).on('error', function (event) {
        console.error(String(event.target) + String(event.target.error));
    }).on('complete', function () {
        console.warn('Fastest is ' + this.filter('fastest').pluck('name'));
        console.log(this.table.toString());
    });
}

var a_10 = create_array(10);
console.log('The array is', a_10);
console.log('The array is', q_sort_i(a_10.slice()));
console.log('The array is', a_10);
var a_100 = create_array(100);
var a_1k = create_array(1000);
var a_10k = create_array(10000);
var a_100k = create_array(100000);
var a_1M = create_array(1000000);
var a_10M = create_array(10000000);
//var a_100M = create_array(100000000);

getSuiteTable('Sorting algorithm suite')
  //.addFunction('QuickSort', function(array) {
  //  q_sort(array);
  //})
  //.addFunction('QuickSort PS', function(array) {
  //  q_sort_ps(array);
  //})
  //.addFunction('QuickSort PST', function(array) {
  //  q_sort_pst(array);
  //})
  //.addFunction('QuickSort OS', function(array){
  //  q_sort_os(array);
  //})
  //.addFunction('QuickSort PS OS', function(array){
  //  q_sort_ps_os(array);
  //})
  //.addFunction('QuickSort Partial/Threshold', function(array){
  //  q_sort_pst_os(array);
  //})
  .addFunction('QuickSort In place', function(array){
     q_sort_i(array.slice());
  })
  .addFunction('Array#sort', function(array) {
     sort(array.slice());
  })
  .addInput('N = 10', [a_10])
  .addInput('N = 100', [a_100])
  .addInput('N = 1K', [a_1k])
  .addInput('N = 10K', [a_10k])
  .addInput('N = 100K', [a_100k])
  .addInput('N = 1M', [a_1M])
  .addInput('N = 10M', [a_10M])
  //.addInput('N = 100M', [a_100M])
  // spin it!
  .run({async : true});