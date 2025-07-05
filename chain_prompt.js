// Write a JavaScript function called toKebabCase that converts a given string into kebab-case format by following these steps:
// 1. Normalize the input: Trim leading and trailing whitespace, and validate that the input is a string.
//    If it is not, throw a TypeError with a meaningful message.
// 2. Split the input into words: Identify word boundaries in camelCase, PascalCase, snake_case, kebab-case,
//    and space-separated formats. Ensure acronyms (like HTML or API) are handled properly.
// 3. Join and return: Join the words with hyphens (-), convert all characters to lowercase, and return the final kebab-case string.
// Examples:
// toKebabCase("ThisIsAString") → "this-is-a-string"
// toKebabCase(" already-kebab_case ") → "already-kebab-case"
// toKebabCase(123) → throws a TypeError
