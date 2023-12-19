// generatePassword.js

function generatePassword() {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  // Generate a random lowercase letter
  const randomLowercase = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];

  // Generate a random uppercase letter
  const randomUppercase = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];

  // Generate a random number
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  // Generate five random lowercase letters
  const randomLowercaseLetters = Array.from({ length: 5 }, () =>
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
  ).join('');

  // Combine all the generated characters
  const password = randomLowercase + randomUppercase + randomNumber + randomLowercaseLetters;

  return password;
}

console.log(generatePassword());
