/**
 *  This function returns a random element from the array
 * @param arr array of words
 * @returns A random element from the array
 */

const getRandomItem = <T>(arr: T[]): T => {
  //  Generates random Index
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

//  EXPORTS STATEMENTS
export default getRandomItem;
