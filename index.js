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
  if(string === whisper(string))
    return console.log("I can't hear you!")
  elseif (string === shout(string))
    return console.log("YES INDEED!")
  elseif(string === "I love you, Grandma.")
    return console.log("I love you too.")
  else
    return doNothing()
}
