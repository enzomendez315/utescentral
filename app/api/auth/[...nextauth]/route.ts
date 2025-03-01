import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile found.")
      }

      // Create or update user here

      // await prisma.user.upsert({
      //   where: {
      //     email: profile.email,
      //   },
      //   create: {
      //     email: profile.email,
      //     name: profile.name,
      //   }
      //   update: {
      //     name: profile.name,
      //   }
      // })

      console.log("Account details:", account);
      console.log("Profile details:", profile);

      return true;
    }
  }
})

export { handler as GET, handler as POST }