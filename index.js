let pass1 = document.getElementById("pass1").firstChild;
let pass2 = document.getElementById("pass2").firstChild;
let pass3 = document.getElementById("pass3").firstChild;
let pass4 = document.getElementById("pass4").firstChild;

let array = [];

function passgenerate() {
  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * (126 - 33) + 33);
    let pass = String.fromCharCode(number);
    array.push(pass);
  }

  return (password = array.join(""));
}

function generate() {
  passgenerate();

  console.log(password);
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
