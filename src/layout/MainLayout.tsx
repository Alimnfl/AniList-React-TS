import { ReactNode } from 'react';
import Navbar from '../component/Navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex w-full h-full overflow-hidden bg-black">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
