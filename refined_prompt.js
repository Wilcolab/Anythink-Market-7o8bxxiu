/**
 * Converts a string to dot.case format.
 * Handles spaces, underscores, hyphens, and mixed casing.
 * Examples:
 *   "first name" => "first.name"
 *   "user_id" => "user.id"
 *   "SCREEN_NAME" => "screen.name"
 *   "mobile-number" => "mobile.number"
 */
function toDotCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')           // Split camelCase
    .replace(/[_\-\s]+/g, '.')                     // Replace spaces, underscores, hyphens with dot
    .replace(/\.{2,}/g, '.')                       // Replace multiple dots with a single dot
    .toLowerCase()
    .replace(/^\.+|\.+$/g, '');                    // Remove leading/trailing dots
}

// Example usages:
console.log(toDotCase("first name"));      // "first.name"
console.log(toDotCase("user_id"));         // "user.id"
console.log(toDotCase("SCREEN_NAME"));     // "screen.name"
console.log(toDotCase("mobile-number"));   // "mobile.number"
