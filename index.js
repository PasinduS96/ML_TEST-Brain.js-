const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// network.train([
// 	{ input: [ 0, 0, 0 ], output: [ 0 ] },
// 	{ input: [ 0, 0, 1 ], output: [ 0 ] },
// 	{ input: [ 0, 1, 1 ], output: [ 0 ] },
// 	{ input: [ 1, 0, 1 ], output: [ 1 ] },
// 	{ input: [ 1, 1, 1 ], output: [ 1 ] }
// ]);

network.train([
	{ input: [ 1, 2 ], output: [ 1 ] },
	{ input: [ 2, 3 ], output: [ 1 ] },
	{ input: [ 3, 4 ], output: [ 0 ] },
	{ input: [ 4, 1 ], output: [ 0 ] },
	{ input: [ 3, 1 ], output: [ 1 ] },
	{ input: [ 2, 1 ], output: [ 1 ] },
	{ input: [ 2, 1 ], output: [ 0 ] }
]);

const output = network.run([ 3, 1 ]);

console.log(output);
