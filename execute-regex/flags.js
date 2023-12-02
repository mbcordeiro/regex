//g - global 
//i - ignore case 

const text = 'Carlos signed the petition.'
console.log(text.match(/C|ab/)) //not-flags
console.log(text.match(/c|ab/i)) //ignore case
console.log(text.match(/ab|c/gi))  //ignore case all patterns and global 