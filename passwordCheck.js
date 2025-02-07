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
console.log(checkPasswordStrength("password"));  
console.log(checkPasswordStrength("Password123")); 
console.log(checkPasswordStrength("12345678")); 
console.log(checkPasswordStrength("WeakPass1")); 
console.log(checkPasswordStrength("STRONG123")); 

