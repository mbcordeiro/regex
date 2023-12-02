const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regex = RegExp('9')
console.log('RegExp methods...')
console.log(regex.test(text))
console.log(regex.exec(text))

const regexLetters = /[a-f]/g
console.log('String methods...')
console.log(text.match(regexLetters))
console.log(text.search(regexLetters))
console.log(text.replace(regexLetters, 'I thought'))
console.log(text.split(regexLetters))