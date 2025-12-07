import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "./lib/db";
import User from "./models/user.model";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize({ email, password }) { 
        await connectDb();

        if (!email || !password) {
          throw new Error("Missing email or password");
        }
 
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User does not exist");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("Incorrect password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  callbacks: {
    //TOKEN ke ander user data dalta hai
    async signIn({user,account}){
      if(account?.provider=="google"){
        await connectDb()
        let dbUser=await User.findOne({email:user.email})
        if(!dbUser){
        dbUser=await User.create({
          name:user.name,
          email:user.email,
          })
        }

        user.id=dbUser._id.toString()
        user.role=dbUser.role
      }
      return true


    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },

    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET,
});
