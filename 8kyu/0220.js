// validate code with simple regex

function validateCode (code) {
    return /^[123]/.test(code)
}