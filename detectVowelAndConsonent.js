// Detect vowel and consonent

const solution = (letter)=> {
    //Write Your solution Here
   //don't forget to return
    const vowel = [ 'a', 'e', 'i', 'o', 'u'];
    if (vowel.includes(letter)) {
        return 'VOWEL';
    }else{
        return 'CONSONANT';
    }

};
  