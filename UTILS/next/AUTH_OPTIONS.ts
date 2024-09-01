/** @format */

import { NextAuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import USER from "@handler/user";

import CredentialsProvider from "next-auth/providers/credentials";

export const AUTH_OPTIONS: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "username",
          type: "username",
          placeholder: "username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }

        const payload = {
          username: credentials.username,
          password: credentials.password,
        };

        const { status, data } = await USER.LOGIN(payload);
        if (status === "success") {
          const userData = {
            name: data.display_name,
            email: data.email,
            image: data.display_picture,
            id: data.id,
            role: data.role,
            username: data.username,
          };
          return userData;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        const { iat, exp, jti, ...data } = token;
        return { ...session, user: data };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export async function LOGIN_SERVER() {
  const session = await getServerSession(AUTH_OPTIONS);
  if (!session) redirect("/signin");
}

export async function DENIAL_LOGIN() {
  const session = await getServerSession(AUTH_OPTIONS);
  if (session) redirect("/");
}

export function PROTECT_PAGE(role: string, page: string) {
  const configs = [
    { role: ["System Admin"], permit: ["Home", "Access", "Task"] },
    { role: ["Admin"], permit: ["Home", "Translate", "Publish"] },
    {
      role: ["Translator", "Editor", "Quality Assurance"],
      permit: ["Home", "Translate"],
    },
  ];

  configs.forEach((config) => {
    if (config.role.includes(role)) {
      if (!config.permit.includes(page)) {
        redirect("/not-found");
      }
    }
  });
}
