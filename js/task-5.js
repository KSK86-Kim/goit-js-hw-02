const checkForSpam = function (message) {
  const triggerWords = ["spam ", "sale"];
  const messageStringNormalize = message.toLowerCase();
  for (let word of triggerWords) {
    if (messageStringNormalize.includes(word)) {
      return true;
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
