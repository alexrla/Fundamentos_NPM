// const _ = require("lodash");
import lodash from 'lodash';
import chalk from 'chalk';

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [2, 4, 6, 7, 8];

// Listando a diferença entre os dois arrays;
// O que tem em arrayA, que não tem em arrayB;
const diff = lodash.difference(arrayA, arrayB);

console.log(chalk.red.bold(diff));
