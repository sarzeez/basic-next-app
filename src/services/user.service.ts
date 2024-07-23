export const userService = {
  authenticate,
};

function authenticate(username: string, password: string) {
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const user = {
      id: "9001",
      name: "Web Admin",
      email: "test@example.com",
    };

    return user;
  }

  return null;
}
