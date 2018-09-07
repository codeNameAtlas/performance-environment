//const { performance } = require('perf_hooks');
const performance = require('perf_hooks').performance;


// set up constant variables
// set iterations high to measure performance at scale on a simple function
let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// start measuring performance

performance.mark('start');

// code to measure

while (iterations--) {
  add(a, b);
}

// end measuring performance

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [ measure ] = performance.getEntriesByName('My Special Benchmark');

// output the results to the console
console.log(measure);
