function generateEmail() {
  const adjectives = ['happy', 'sleepy', 'grumpy', 'sneezy', 'dopey', 'bashful', 'doc', 'wicked', 'fierce', 'brave'];
  const nouns = ['dwarf', 'cat', 'dog', 'unicorn', 'wizard', 'ninja', 'pirate', 'dragon', 'jedi', 'squirrel'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  const email = `${randomAdjective}.${randomNoun}@${randomDomain}`;
  return email;
}

// Generate and print a random email
const randomEmail = generateEmail();
console.log(randomEmail);
