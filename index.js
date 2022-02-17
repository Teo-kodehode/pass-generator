//JavaScript for making "randomized" passwords
//imports the neccesary elements that need to be changed
let pass1 = document.getElementById("pass1").firstChild;
let pass2 = document.getElementById("pass2").firstChild;
let pass3 = document.getElementById("pass3").firstChild;
let pass4 = document.getElementById("pass4").firstChild;

//Array needed for making passwords
let array = [];

//Function for generating the actual passwords
function passgenerate() {
  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * (126 - 33) + 33);
    let pass = String.fromCharCode(number);
    array.push(pass);
  }

  return (password = array.join(""));
}

//runs the generation and displays the passwords on the Site
function generate() {

//Runs the passgenerate function
  passgenerate();


//Actually display the passwords
  pass1.textContent = password;
  array.splice(0, array.length);

  passgenerate();
  pass2.textContent = password;
  array.splice(0, array.length);

  passgenerate();
  pass3.textContent = password;
  array.splice(0, array.length);

  passgenerate();
  pass4.textContent = password;
  array.splice(0, array.length);
}
