// Fisher-Yates (aka Knuth) Shuffle
// https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

// to move index after shuffling array
const move = (arr) => {
  arr.push(arr.shift());
  return arr;
};

module.exports = {
  match: (names) => {
    names = shuffle(names);
    let movedNames = move(names.slice(0));
    let matches = [];

    for (let i = 0; i < names.length; i++) {
      matches.push([names[i], movedNames[i]]);
    }

    return matches;
  },
};
