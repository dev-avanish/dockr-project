const messages = [
    "Hello from Docker!",
   
];

document.getElementById("welcome-message").textContent = 
    messages[Math.floor(Math.random() * messages.length)];

