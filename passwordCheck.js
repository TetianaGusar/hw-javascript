function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "Weak";
    }

    if (!/\d/.test(password)) {
        return "Weak";
    }

    if (password === password.toLowerCase() || password === password.toUpperCase()) {
        return "Weak";
    }

    return "Strong";
}
console.log(checkPasswordStrength("password"));  // Очікуємо: Weak
console.log(checkPasswordStrength("Password123")); // Очікуємо: Strong
console.log(checkPasswordStrength("12345678")); // Очікуємо: Weak
console.log(checkPasswordStrength("WeakPass1")); // Очікуємо: Strong
console.log(checkPasswordStrength("STRONG123")); // Очікуємо: Weak (немає маленьких літер)

