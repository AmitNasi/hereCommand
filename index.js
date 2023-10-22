import welcomeSentences from "./welcomeSentences";

let idx = 0;

register("command", (user) => {
  const sentence = welcomeSentences[idx];
  const formattedSentence = sentence.replace("<ign>", user);

  ChatLib.say("/pc " + formattedSentence);
  idx++;  
}).setName("shalom");
