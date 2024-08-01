
export const hashPassword = async (password: string) => {
    const hash = await Bun.password.hash(password, {
        algorithm: "argon2id",
        memoryCost: 4,
        timeCost: 3,
    });

    return hash;
}

export const verifyPassword = async (password: string, hashedPassword: string) => {
    const match = await Bun.password.verify(password, hashedPassword);
    if (!match) {
        return false
    }
    return true;
}