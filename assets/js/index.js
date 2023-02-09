
/**
 * Sends email to the specified address.
 * using the text boxes in contact form
 */
var link = document.getElementById("send-email-link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  var name = document.getElementById("contact-name").value;
  var message = document.getElementById("message").value;
  var recipient = "mark.powell0@outlook.com"
  var subject = "Message from " + name;
// open the email client
  window.location.href = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);

});
