<script>
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default form submission

  const form = e.target;
  const data = new FormData(form);
  const responseMessage = document.getElementById("responseMessage");

  fetch("https://formspree.io/f/yourFormID", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      responseMessage.textContent = "Thank you! Your message has been sent.";
      responseMessage.style.color = "green";
      form.reset();
    } else {
      responseMessage.textContent = "Oops! Something went wrong.";
      responseMessage.style.color = "red";
    }
  })
  .catch(error => {
    responseMessage.textContent = "Error sending form. Please try again.";
    responseMessage.style.color = "red";
  });
});
</script>
