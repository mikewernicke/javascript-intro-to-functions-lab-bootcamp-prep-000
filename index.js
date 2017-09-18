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
  if(string === shout(string)
    return "YES INDEED!"
  elseif(string === whisper(string))
    return "I can't hear you!"
  elseif(string === "I love you, Grandma.")
    return "I love you too.")
  }
}
