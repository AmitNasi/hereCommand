import welcomeSentences from "./welcomeSentences";
import artOfWarQuotes from "./artOfWarQuotes";

let welcomeIndex = 0;
let artOfWarIndex = 0;

register("command", (user) => {
  const sentence = welcomeSentences[welcomeIndex];
  const formattedSentence = sentence.replace("<ign>", user);

  ChatLib.say("/pc " + formattedSentence);
  welcomeIndex++;  
}).setName("shalom");

register("command", () => {
  const sentence = artOfWarQuotes[artOfWarIndex];
  const formattedSentence = sentence.concat(" - Sun Tzu, The Art of War");
  
  ChatLib.say("/pc " + formattedSentence);
  artOfWarIndex++;  
}).setName("artofwar");

register("chat", (player, drop, event) => {
  let randomNum = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
  let sentence = "There is a "+ randomNum + " chance that "+ player + " will get " + drop;
  ChatLib.say("/pc " + sentence);
}).setCriteria("Will ${player} get ${drop}").setContains();
