

export function validateEmpty(value) {
    if (value.trim() === '' || value.length === 0) {
        return false;
    } else {
        return true;
    }
}

export function emailValidate(email) {
    const passwordRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (passwordRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

export function passwordValidate(password) {
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(password)) {
        return true;
    } else {
        return false;
    }
}