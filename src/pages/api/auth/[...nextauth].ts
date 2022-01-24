import { query as q } from "faunadb"

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
      
    }),
    
  ],

  callbacks: {
    async signIn({ user, account, profile, credentials }) {
       const { email } = user
       
       try {
        await fauna.query(
            q.Create(
                q.Collection('users'),
                { data: { email } }
            )
        )
    
        return true
    } catch {
        return false
     }
    },
}
})