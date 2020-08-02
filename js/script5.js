function checkForSpam(str) {
  const message = str.toLowerCase();
  const isThiseWord = message.includes("sale") || message.includes("spam");
  //.includes('sale') || str.toLowerCase().join(' ').includes('spam');
  return isThiseWord;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
