
import Navbar from './(components)/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import myUser from './actions/getUser'
import getBasketItems from './actions/getBasketItems'
import { TProvider } from '@/providers/toast-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const myCurrentUser = await myUser();

  const basketItems = await getBasketItems();
  return (
    <html lang="en">
      <body className={inter.className}>
        <TProvider/>
        <Navbar
        basketItems={basketItems}
        myUser={myCurrentUser}
        />
        {children}
        </body>
    </html>
  )
}
