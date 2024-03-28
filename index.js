document.getElementById("birthdayForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    const diff = today - birthdate;
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  
    const message = `Happy ${age}th Birthday, ${name}!`;
  
    document.getElementById("message").innerText = message;
  });

  