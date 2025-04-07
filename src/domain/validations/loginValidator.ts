interface LoginValidationResult {
    valid: boolean;
    message: string;
    isError: boolean;
}

function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email)
}

export function validateLogin(
    email: string,
    password: string,
    tempUser?: { email: string; password: string } | null
): LoginValidationResult {
    if (!email || !password) {
        return {
            valid: false,
            message: 'Todos os campos são obrigatórios.',
            isError: true,
        }
    }

    if (!isValidEmail(email)) {
        return {
            valid: false,
            message: 'Formato de email inválido.',
            isError: true,
        }
    }

    if (password.length < 8) {
        return {
            valid: false,
            message: 'Sua senha deve ter no mínimo 8 caracteres.',
            isError: true,
        }
    }

    if (tempUser) {
        if (email === tempUser.email && password === tempUser.password) {
            return {
                valid: true,
                message: 'Dados OK',
                isError: false,
            }
        }
    }

    if (email !== '123@gmail.com' || password !== '12345678') {
        return {
            valid: false,
            message: 'Email ou senha inválidos.',
            isError: true,
        }
    }

    return {
        valid: true,
        message: 'Dados OK',
        isError: false,
    }
}
