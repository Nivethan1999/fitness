// components/Layout.tsx
import React from 'react';
import Navigationbar from './NavigationBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Include your head elements here */}
      </head>
      <body>
        <Navigationbar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
