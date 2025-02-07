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
<<<<<<< HEAD
console.log(checkPasswordStrength("STRONG123")); 
=======
console.log(checkPasswordStrength("STRONG123"));
>>>>>>> 32ec7e3661c7c736753751dc14f60a6c443f75d9

