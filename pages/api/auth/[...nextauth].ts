import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

const API_URL = "http://localhost:4000/api/v1";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const { data } = await axios.post(
            `${API_URL}/user/login`,
            credentials
          );
          return data;
        } catch (error: any) {
          const message =
            error.response?.data?.message || "Authentication failed";
          throw new Error(message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt(token: any, user: any) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session(session: any, token: string) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
