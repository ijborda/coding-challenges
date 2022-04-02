// Palindrome Strings

function isPalindrome(line) {
    return String(line).toLowerCase().split("").reverse().join("") === String(line).toLowerCase();
}