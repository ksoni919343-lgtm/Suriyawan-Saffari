import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { supabase } from '../../../lib/supabaseClient';
import Twilio from 'twilio';

const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });
        if (error) throw new Error(error.message);
        return data.user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    {
      id: 'otp',
      name: 'OTP',
      type: 'credentials',
      credentials: {
        phone: { label: 'Phone', type: 'text' },
        otp: { label: 'OTP', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials.otp) {
          await twilioClient.verify.services(process.env.TWILIO_VERIFY_SID).verifications.create({
            to: credentials.phone,
            channel: 'whatsapp',
          });
          return null;
        } else {
          const { status } = await twilioClient.verify.services(process.env.TWILIO_VERIFY_SID).verificationChecks.create({
            to: credentials.phone,
            code: credentials.otp,
          });
          if (status !== 'approved') throw new Error('Invalid OTP');
          const { data } = await supabase.from('users').select('*').eq('phone', credentials.phone).single();
          return data;
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        const { data: role } = await supabase.from('roles').select('role').eq('user_id', user.id).single();
        token.role = role?.role || 'customer';
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
