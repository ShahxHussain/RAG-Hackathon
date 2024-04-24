var messageCountVectara = 1;
var messageCountLlama = 1;

function sendMessage() {
    var userInput = document.getElementById("textInput").value;
    if (userInput.trim() !== "") {
        addMessage("User", userInput, "chatContainerVectara");
        addMessage("User", userInput, "chatContainerLlama");

        var responseVectara = generateResponse(userInput, "Vectara");
        var responseLlama = generateResponse(userInput, "Llama");

        addMessage("System", responseVectara, "chatContainerVectara");
        addMessage("System", responseLlama, "chatContainerLlama");

        document.getElementById("textInput").value = "";
        scrollToBottom(); // Scroll to bottom of chat containers
    }
}

function addMessage(sender, message, chatContainerId) {
    var chatContainer = document.getElementById(chatContainerId);
    if (chatContainer) {
        var messageDiv = document.createElement("div");
        var messageClass = "chat-message-" + sender.toLowerCase();
        messageDiv.className = "chat-message " + messageClass;
        var messageContent = '<div class="message-text ' + (sender.toLowerCase() === "user" ? "user-input" : "system-response") + '">' + message + '</div>';
        messageDiv.innerHTML = messageContent;
        chatContainer.appendChild(messageDiv);
    } else {
        console.error("Chat container not found:", chatContainerId);
    }
}

function generateResponse(userInput, chatbotName) {
    return "Response to '" + userInput + "' by " + chatbotName;
}

function scrollToBottom() {
    var chatContainerVectara = document.getElementById("chatContainerVectara");
    var chatContainerLlama = document.getElementById("chatContainerLlama");
    chatContainerVectara.scrollTop = chatContainerVectara.scrollHeight;
    chatContainerLlama.scrollTop = chatContainerLlama.scrollHeight;
}

function selectFile() {
    var fileInput = document.getElementById("fileInput");
    fileInput.click(); // Trigger file input click event
}

fileInput.addEventListener("change", function() {
    var selectedFile = fileInput.files[0];
    if (selectedFile) {
        // Handle the selected file (e.g., upload or process it)
        console.log("Selected file:", selectedFile.name);
    }
});


// Listen for "Enter" key press in the input field
document.getElementById("textInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        sendMessage();
    }
});


























// var messageCount = 1;

// function sendMessage() {
//     var userInput = document.getElementById("textInput").value;
//     if (userInput.trim() !== "") {
//         addMessage("User", userInput);

//         // Generate response with count
//         var response = "chatBOT: " + messageCount + "..............." + "Response";
//         messageCount++;
//         addMessage("System", response);

//         // Clear the input field
//         document.getElementById("textInput").value = "";

//         // Scroll to the bottom of the chat
//         var chatContainer = document.getElementById("chatContainer");
//         chatContainer.scrollTop = chatContainer.scrollHeight;
//     }
// }

// function addMessage(sender, message) {
//     var chatContainer = document.getElementById("chatContainer");
//     var messageDiv = document.createElement("div");
//     var messageClass = "chat-message-" + sender.toLowerCase();
//     messageDiv.className = "chat-message " + messageClass;
//     var messageContent = '<div class="message-text ' + (sender === "User" ? "user-input" : "system-response") + '">' + message + '</div>';
//     messageDiv.innerHTML = messageContent;
//     chatContainer.appendChild(messageDiv);
// }

// function generateResponse(userInput) {


//     return userInput;
// }

// // Listen for "Enter" key press in the input field
// document.getElementById("textInput").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         sendMessage();
//     }
// });