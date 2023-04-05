// validation script here

// 11 Making RegEx in Javascript
// don't need to put 'str'
let reg = /[a-z]/gi;

let reg2 = new RegExp(/[a-z]/, "i");

// 13 Testing a RegEx Pattern
const inputs = document.querySelectorAll("input");

const patterns = {
  // 12 Telephone RegEx
  // ex. abc123456uhg (need to put ^ $ to convert that this input isn't match)
  telephone: /^\d{11}$/,

  // 14 Matching a Username
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,

  // 15 Email RegEx Pattern
  // (yourname)@(domain).(extension)(.again)
  // (x) ? optional - have x or no x
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

// validation function
function validate(field, regex) {
  //   console.log(regex.test(field.value)); // true false
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
