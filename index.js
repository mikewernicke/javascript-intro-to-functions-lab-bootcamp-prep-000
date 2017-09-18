var string = "Hello"

function doNothing() {}
function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  return console.log(shout(string))
}
function logWhisper(string) {
  return console.log(whisper(string))
}
function sayHiToGrandma(string) {
  {
  if(string === shout(string))
    return console.log("YES INDEED!")
   else if(string === whisper(string))
    return console.log("I can't hear you!")
  else if(string === "I love you, Grandma.")
  return console.log("I love you too.")
  else doNothing()
  }
}
