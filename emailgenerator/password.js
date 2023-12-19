// Function to generate a random password
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]};:',.<>/?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Generate a random password for Gmail
const gmailPassword = generatePassword(12);
console.log("Gmail Password:", gmailPassword);

// Generate a random password for Yahoo
const yahooPassword = generatePassword(10);
console.log("Yahoo Password:", yahooPassword);

// You can generate passwords for other services by calling the generatePassword() function with the desired length.
