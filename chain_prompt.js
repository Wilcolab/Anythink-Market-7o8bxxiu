// Write a JavaScript function called toCamelCase that converts a string to camelCase.
// The function should handle various separators such as spaces, underscores, hyphens, and mixed casing (e.g., "User_ID-number" → "userIdNumber").
// 1. If the input is not a string or is null/undefined, throw an error with a descriptive message.
// 2. Edge cases like empty strings or strings with only separators should return an empty string.
// 3. The conversion should properly handle leading/trailing/multiple separators and ignore them.
// For example:
//   toCamelCase("first name") → "firstName"
//   toCamelCase("user_id") → "userId"
//   toCamelCase("SCREEN_NAME") → "screenName"
//   toCamelCase("mobile-number") → "mobileNumber"
//   toCamelCase("User_ID-number") → "userIdNumber"
//   toCamelCase("") → ""
//   toCamelCase("___") → ""
//   toCamelCase(123) → throws Error
//   toCamelCase(null) → throws Error

function toCamelCase(str) {
  if (typeof str !== 'string' || str === null) {
    throw new Error('Input must be a non-null string');
  }
  // Remove leading/trailing separators and split by non-alphanumeric chars
  const words = str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase parts
    .split(/[\s_\-\.]+/g)
    .filter(Boolean);

  if (words.length === 0) return "";

  // Lowercase the first word, capitalize following words
  return words
    .map((word, i) => {
      word = word.toLowerCase();
      if (i === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

// Example usages:
console.log(toCamelCase("first name"));      // "firstName"
console.log(toCamelCase("user_id"));         // "userId"
console.log(toCamelCase("SCREEN_NAME"));     // "screenName"
console.log(toCamelCase("mobile-number"));   // "mobileNumber"
console.log(toCamelCase("User_ID-number"));  // "userIdNumber"
console.log(toCamelCase(""));                // ""
console.log(toCamelCase("___"));             // ""
// console.log(toCamelCase(123));            // throws Error
// console.log(toCamelCase(null));           // throws Error
