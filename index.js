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
  if(console.Log(string) === shout(string)) {
     return logShout("YES INDEED!")
  } elseif (console.Log(string) === whisper(string))
     return console.log("I can't hear you!")
  } elseif(console.Log(string) === "I love you, Grandma.")
      console.log("I love you too.")
}
