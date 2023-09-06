//Excercise 3

class EmailMessage {
  constructor(_from, _to, _subject, _message) {
    this.from = _from;
    this.to = _to;
    this.subject = _subject;
    this.message = _message;
  }
  displayMsg() {
    const fullMessage = `From: ${this.from}, To: ${this.to}, Subject: ${this.subject}, ${this.message}`;
    alert(fullMessage);
  }
}

let sender = prompt("Enter who this message is from:");
let recipient = prompt("Enter who the recipient: ");
let msgSubject = prompt("Enter the message subject:");
let messageContent = prompt("Write a message:");

let emailMessage = new EmailMessage(
  sender,
  recipient,
  msgSubject,
  messageContent
);
emailMessage.displayMsg();

let form = document.querySelector("#email-form");
let senderValue = document.querySelector("#senderEmail");
let recipientValue = document.querySelector("#recipientEmail");
let subjectValue = document.querySelector("#subject");
let messageValue = document.querySelector("#message");

senderValue.value = emailMessage.from;
recipientValue.value = emailMessage.to;
subjectValue.value = emailMessage.subject;
messageValue.value = emailMessage.message;
