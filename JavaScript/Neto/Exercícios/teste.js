let str = 'LEoNaRdO HenRiQuE'

function capitalizeString(str) {
    str = str.toLowerCase()
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = capitalizeString(words[i]);
    }
    return words.join(" ");
  }

console.log(capitalizeWords(str))