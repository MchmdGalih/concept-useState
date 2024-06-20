// ** Gets random integer: [1..6]. */
const getRandomInt = () => Math.floor(Math.random() * 6) + 1;

// ** Gets n rolls => [num, ...] */
const getRolls = (n) => Array.from({ length: n }, () => getRandomInt());

// ** Gets sum of nums */
const getSum = (nums) => nums.reduce((prev, curr) => prev + curr, 0);

export { getRolls, getSum, getRandomInt };
