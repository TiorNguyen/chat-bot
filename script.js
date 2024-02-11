const sendChatBtn = document.querySelector(".chat_input span");
const chatInput = document.querySelector(".chat_input textarea");

let userMessage;
const chatbox = document.querySelector(".chatbox");
const createChatLi = (message , className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="fas fa-robot"></i></span>${message}` ;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const genRes = () => {
    const API_URL = "";
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if(!userMessage){
        return;
    }
    chatbox.appendChild(createChatLi(userMessage,"outgoing"));

    setTimeout(() => {
            chatbox.appendChild(createChatLi("...","incoming"));
    },500);
}


sendChatBtn.addEventListener("click", handleChat);