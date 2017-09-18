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
  if(string === shout(string)
    return logShout("yes indeed") 
  elseif (string === whisper(string)
    return logWhisper("I can't hear you!")
  elseif (string = "I love you, Grandma.")
    then return console.log("I love you too.")
  else
    return ""
}
