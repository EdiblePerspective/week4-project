const form = document.getElementById("messageForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const json = await response.json();

  console.log(json);
});

async function getMessages() {
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  messages.forEach(function (msg) {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = msg.username;
    p.textContent = msg.messageContent;

    const messageContainer = document.getElementById("messageContainer");

    messageContainer.appendChild(h3);
    messageContainer.appendChild(p);
  });
  // profit?
}

getMessages();