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

