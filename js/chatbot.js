function showBot() {
  console.log("click");
  let x = document.getElementById("hidden");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
const chatContainer = document.getElementById("chat-container");
const userInputElement = document.getElementById("user-input");
function appendMessage(message, isUser) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add(
    "message",
    isUser ? "user-message" : "bot-message"
  );
  const imageElement = document.createElement("img");
  imageElement.classList.add("message-image");
  imageElement.src = isUser ? "../public/res/chatbot/user.webp" : "../public/res/chatbot/bot.webp"; // Replace with actual image paths
  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.textContent = message;
  messageContainer.appendChild(imageElement);
  messageContainer.appendChild(messageText);
  chatContainer.appendChild(messageContainer);
  // Auto-scroll to the latest message
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(userMessage) {
  // Predefined responses based on user input
  switch (userMessage.toLowerCase()) {
    case "hi":
      return "Hello there! Discover company and the services that we offer";
    case "hey":
      return "Hey! Discover company and the services that we offer";
    case "namaste":
      return "Namaste! Discover company and the services that we offer";
    case "hello":
      return "Hello there! Discover company and the services that we offer";
    case "1":
    case "company":
      return "We're a forward-thinking tech startup focused on innovation and growth, transforming industries through cutting-edge solutions.";
    case "2":
    case "services":
    case "solutions":
      return "We Offer a Wide Variety of Solutions to meet your needs like Strategic Business Solution, Change Management, Data - Driven AI Solutions, Robust Infrastructure Management, Marketing Strategies, learn more at Solutions Page";
    case "3":
    case "product":
    case "products":
      return "Discover HyperOne, a next-generation CRM platform reshaping customer relationship management. Tailored with powerful tools, and insightful analytics, HyperOne optimizes operations, elevates customer interactions, and fuels business expansion.";
    case "4":
    case "learn more":
      return "Discover reply with Careers, Student, Institution. to explore growth opportunities.";
    case "career":
    case "careers":
      return "Yes, we have exciting career opportunities! Check out our Careers page for current openings";
    case "students":
    case "student":
      return "Our  offer diverse student programs, including Apprenticeships, Internships, and Mentorship Programs. Learn more on our Institution Programs page.";
    case "institution":
    case "institutes":
    case "institute":
      return "We institution programs focus on, engaging Events and Seminars, practical Industrial Training, and robust Training and Placement opportunities. Explore them further on our Student Programs page.";
    case "bye":
      return "Goodbye! Feel free to return if you have more questions.";
    case "goodbye":
      return "Goodbye! If you need assistance in the future, don't hesitate to ask.";
    case "take care":
      return "You too! If you have more inquiries, don't hesitate to reach out.";
    default:
      return "I'm sorry, I don't quite understand. Can you please rephrase your question?";
  }
}
function sendMessage() {
  const userMessage = userInputElement.value.trim();
  if (userMessage === "") return;
  appendMessage(userMessage, true);
  userInputElement.value = ""; // Clear the input field after sending the message
  // Generate bot response
  setTimeout(() => {
    const botResponse = getBotResponse(userMessage);
    appendMessage(botResponse, false);
  }, 500);
}
// Handle "Enter" key press in the input field
userInputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
