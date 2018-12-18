const axios = require("axios");

const accessToken = "your-code-goes-here";

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

postMessage("Hello, is anyone out there?");
