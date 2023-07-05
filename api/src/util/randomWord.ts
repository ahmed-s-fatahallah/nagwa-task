//  Types defination
interface word {
  id: number;
  word: string;
  pos: string;
}

/**
 *  This function returns a random element from the array
 * @param arr array of words
 * @returns A random element from the array
 */

const randomWordGenerator = (arr: word[]) => {
  //  Generates random Index
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

//  EXPORTS STATMENTS
export default randomWordGenerator;
