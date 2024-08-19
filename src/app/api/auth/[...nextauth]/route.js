import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const user = await db.collection("users").findOne({ email });
        if (!user) {
          return null;
        }
        const decryptPassword = bcrypt.compareSync(password, user?.password); // true
        if (!decryptPassword) {
          return null;
        }
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ account, user }) {
      if (account.provider === "google" || account.provider === "github") {
        // const { name, email, image } = user;
        // console.log(name, email, image);
        try {
          const db = await connectDB()
          const userCollection = db.collection('users')
          const userExist = await userCollection.findOne({email:user?.email})
          if(!userExist) {
            const res =  await userCollection.insertOne(user)
            return user
          }
          else{
            return user
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return user;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
