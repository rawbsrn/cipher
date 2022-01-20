function capitals(words){
  const firstLetter = words.slice(0, 1).toUpperCase();
  const lastLetter = words.slice(-1).toUpperCase();
  return firstLetter + lastLetter;
}

function reverseFirstLastLetter(words){
  const firstLetter = words.slice(0, 1);
  const lastLetter = words.slice(-1);
  return lastLetter + firstLetter;
}

function cipher(words){
  return words + reverseFirstLastLetter(capitals(words));
}

function countCipher(words){
  const sentenceLength = parseInt(words.length / 2);
  return words.charAt(sentenceLength) + cipher(words);
}

const sentence = prompt("Enter a sentence:");
alert(countCipher(sentence));
