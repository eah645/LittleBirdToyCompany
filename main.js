//Sign up

//clears default text from name value, doesn't erase user input
function clearName() {
  if (document.getElementById("nameField").value == "First and Last Name") {
    document.getElementById("nameField").value = "";
  }
}
//clears default text from phone field, doesn't erase user input
function clearPhone() {
  if (document.getElementById("phoneField").value == "example: 212-123-1234") {
    document.getElementById("phoneField").value = "";
  }
}
function clearEmail() {
  if (document.getElementById("emailField").value == "jsmith@gmail.com") {
    document.getElementById("emailField").value = "";
  }
}
function resetName() {
  if (document.getElementById("nameField").value == "") {
    document.getElementById("nameField").value = "First and Last Name";
  }
}
function resetPhone() {
  if (document.getElementById("phoneField").value == "") {
    document.getElementById("phoneField").value = "example: 212-123-1234";
  }
}
function resetEmail() {
  if (document.getElementById("emailField").value == "") {
    document.getElementById("emailField").value = "jsmith@gmail.com";
  }
}

//carousel//
//shows toy airplane slides//
function showToyAirplanes() {
  document.getElementById("airplane1").src = "https://i.imgur.com/LDjiPaS.png";
  document.getElementById("airplane2").src = "https://i.imgur.com/Oknbzyl.png";
}

//shows toy block slides//
function showToyBlocks() {
  document.getElementById("airplane1").src = "https://i.imgur.com/ifBpURT.png";
  document.getElementById("airplane2").src = "https://i.imgur.com/fiN4oD5.png";
}

//shows toy boat slides//
function showToyBoats() {
  document.getElementById("airplane1").src = "https://i.imgur.com/kXFAx5w.png";
  document.getElementById("airplane2").src = "https://i.imgur.com/wofxOPJ.png";
}

//shows toy car slides//
function showToyCars() {
  document.getElementById("airplane1").src = "https://i.imgur.com/QEgeZrF.png";
  document.getElementById("airplane2").src = "https://i.imgur.com/3c4zOKm.png";
}

//show toy train slides//
function showToyTrains() {
  document.getElementById("airplane1").src = "https://i.imgur.com/j43skEc.png";
  document.getElementById("airplane2").src = "https://i.imgur.com/04s5cBU.png";
}

//scroll
function showProducts() {
  document.getElementById("#").scrollIntoView();
}

//shows random customer reviews//
var reviewArray = [
  "Nice varnish and no smell, no risk of splinters! 5/5 stars -- Customer",
  "This will be a wonderful heirloom for my children - they love it! 5/5 stars -- Customer",
  "My children love building with the block set, looking to buy more products! 5/5 stars -- Customer"
];

var randomNumber = Math.floor(Math.random() * reviewArray.length);
document.getElementById("reviews").textContent = reviewArray[randomNumber];
