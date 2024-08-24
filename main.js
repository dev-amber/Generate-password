const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolSet = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-'];

// Selectors
const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbols");

const getrandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}
const generatepassword = () => {
    let password = "";
    while (password.length < totalchar.value) {
        if (upperinput.checked) {
            password += getrandomdata(upperset);
        }
        if (lowerinput.checked) {
            password += getrandomdata(lowerset);
        }
        if (numberinput.checked) {
            password += getrandomdata(numberset);
        }
        if (symbolinput.checked) {
            password += getrandomdata(symbolSet);
        }
    }
    passbox.innerText = truncateString(String(password), totalchar.value);
}



const truncateString = (str, num) => {
    return str.substring(0, num);
}


var str;

var obj;

// Generate password initially
generatepassword();

// Add event listener to button to generate password on click
document.getElementById("btn").addEventListener("click", generatepassword);

// Checking if 'obj' is defined before accessing its 'value' property
if (obj && obj.value) {
    console.log(obj.value);
} else {
    console.log("'obj' is undefined or does not have a 'value' property");
}
