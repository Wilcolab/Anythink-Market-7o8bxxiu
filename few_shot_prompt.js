/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and uppercase input.
 * Examples:
 *   "first name" => "firstName"
 *   "user_id" => "userId"
 *   "SCREEN_NAME" => "screenName"
 *   "mobile-number" => "mobileNumber"
 */
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^[A-Z]/, c => c.toLowerCase());
}

// Example usages:
console.log(toCamelCase("first name"));      // "firstName"
console.log(toCamelCase("user_id"));         // "userId"
console.log(toCamelCase("SCREEN_NAME"));     // "screenName"
console.log(toCamelCase("mobile-number"));   // "mobileNumber"
