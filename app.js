const axios = require("axios");

const accessToken = "xoxp-506859732263-505702558819-507093110083-e85ffa71cf01d82892a9bb8d3c17446d";

async function postMessage(messageText) {
  const url = "https://slack.com/api/chat.postMessage";
  const post = {
    channel: "#general",
    text: messageText
  };
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
  };
  try {
    const response = await axios.post(url,
                                      post, 
                                      { headers: headers });
    console.log(` Response code: ${response.status}`);
  } catch(e) {
    console.log(`Error posting message: ${e}`);
  } 
}

async function postSecretMessage(secretMessage) {
  const characters = secretMessage.split('').map(ch => ch.charCodeAt(0));
  var hash = characters.reduce((previous, current) => ((previous << 5) + previous) + current, 5381);
  /*const hash = characters.reduce(function(prev, curr){
    return ((prev << 5) + prev) + curr;
  }, 5381)*/
  await postMessage(hash.toString());
}

//postMessage("Hello, is anyone out there?");
postSecretMessage("12303349");
