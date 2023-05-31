// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedString", () => {
    it("takes in a string and returns a string with a coded message", () => {
      expect(codedString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedString(secretCodeWord3)).toEqual("G0bbl3dyg00k")
      expect(codedString(secretCodeWord3)).toEqual("3cc3ntr1c")

      const secretCodeWord1 = "Lackadaisical"
      // Expected output: "L4ck4d41s1c4l"
      const secretCodeWord2 = "Gobbledygook"
      // Expected output: "G0bbl3dyg00k"
      const secretCodeWord3 = "Eccentric"
      // Expected output: "3cc3ntr1c"

    })
  })

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

const codedString = (str) => {
    let code = {"a":4, "e":3, "i":1, "o":0}
    return str.split("").map((value) =>{
        return(object.keys(code).includes(value.toLowercase())) ? code[value.toLowercase()] : value
    }).join("")
}

// pseudo code: 
// input: function that takes in a string
// output/return: a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// I created a function that took in a string and returned an array of strings with the split "" and used the .map to iterate through every element in the array. Then i ask for a return and used the .keys method which returns an array of the objects strings. i also used the .includes() method that looks for one string that could be in another string returning the true or false as it should. And the .toLowerCase converts a string to lower case letters



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
      expect(letter(filterletterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(letter(filterletterB)).toEqual(["Cherry", "Blueberry", "Peach"])

      const filterLetterA = "a"
      // Expected output: ["Mango", "Apricot", "Peach"]
      const filterLetterE = "e"
      // Expected output: ["Cherry", "Blueberry", "Peach"]
      const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    })
  })

// pseudo code: 
// input: array of words and a single letter
// output/return: array of all the words containing that particular letter.
// The letter function takes an array of words and a single letter. It returns a new array that only includes the words from the original array that have the specified letter. The function compares the lowercase versions of the words and the letter to make the comparison case-insensitive. The array now has the words that have the specified letter.

// b) Create the function that makes the test pass.

function letter(words, letter) {
    return words.filter(word => word.toLowerCase().includes(letter.toLowerCase()));
  }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("cards", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
      expect(cards(hand1)).toEqual([true])
      expect(cards(hand2)).toEqual([false])
      expect(cards(hand3)).toEqual([false])
      expect(cards(hand4)).toEqual([true])


    })
  })

  const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expecetd output: true

// pseudo code: 
// input: a function that takes in an array of 5 numbers
// output/return: and array determining whether or not the array is a "full house"
//   The cards function checks if a hand of cards represents a full house or not. It does this by counting the occurrences of each card in the hand and then checking if there are two cards with the same count (2 of a kind) and three cards with the same count (3 of a kind). If conditions are met, it returns true; if not then it returns false.

// b) Create the function that makes the test pass.

function cards(hand) {
  const counts = {};
  for (let i = 0; i < hand.length; i++) {
    const card = hand[i];
    counts[card] = counts[card] ? counts[card] + 1 : 1;
  }
  const cardCounts = Object.values(counts);
  return cardCounts.includes(2) && cardCounts.includes(3);
}

