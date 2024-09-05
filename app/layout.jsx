import React from 'react';
import '../assets/styles/globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang='en'>
          <body>
            <Navbar />
            <hr/>
              <main>{children}</main>
            <Footer />
          </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout;
