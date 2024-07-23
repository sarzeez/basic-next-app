import { getServerSession, User, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 1,
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const user: User = {
          id: "123",
          name: "sarzeez",
          email: "sarzeez@gmail.com",
        };

        if (username == user.name) {
          return user;
        }

        return null;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
