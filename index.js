function shout(string) {
  return string.toUpperCase()
}
shout('hello')


function whisper(string) {
  return string.toLowerCase()
}
whisper('HELLO')


function logShout(string) {
  string.toUpperCase() === string
  console.log(string)
}
logShout('hello')


function logWhisper(string) {
  string.toLowerCase()
  console.log(string)
}
logWhisper('hello')


function sayHiToGrandma(string) {
    if (string.toLowerCase === string) {
      return("I can\'t hear you!")
    }
}

sayHiToGrandma('hello')
