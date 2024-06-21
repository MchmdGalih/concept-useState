// ** Gets random integer: [1..6]. */
const getRandomInt = () => Math.floor(Math.random() * 6) + 1;

// ** Gets n rolls => [num, ...] */
const getRolls = (n) => Array.from({ length: n }, () => getRandomInt());

// ** Gets sum of nums */
const getSum = (nums) => nums.reduce((prev, curr) => prev + curr, 0);

// ** Function as props lessthan4 is Winner */
const lessThan4 = (dice) => getSum(dice) < 4;

// ** Function as props if value dice same  */
const allSameValue = (dice) => dice.every((val) => val === dice[0]);
export { getRolls, getSum, getRandomInt, lessThan4, allSameValue };
