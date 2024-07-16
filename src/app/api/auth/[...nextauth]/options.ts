import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// import { loginServices } from '@/api/auth/useLogin';

export const options: NextAuthOptions = {
// pages:{
// signIn:'/signin'
// },
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      type: 'credentials',
      credentials: {
        number: {
          label: 'Phone Number',
          type: 'phone',
          placeholder: 'Phone Number',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req): Promise<any> {
        let user = {name: 'johy' , age:'23'}
        if(credentials?.password === '12345' && credentials?.number === '12345'){
            return user
        }else{
            return null
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
};
