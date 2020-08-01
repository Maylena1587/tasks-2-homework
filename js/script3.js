// Задача 2 - 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
// function findLongestWord(string = "") {
//   // Write code under this line
//   let longestWord = string.split(" ");
//   string.split(" ");

//   for (const word of string.split(" ")) {
//     if (word > longestWord) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
function findLongestWord(string = "") {
  // Write code under this line
  let words = string.split(" ");
  let currentWord = "";
  let longestWord = words[0];

  for (let i = 0; i < words.length; i += 1) {
    currentWord = words[i];

    if (longestWord.length < currentWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
