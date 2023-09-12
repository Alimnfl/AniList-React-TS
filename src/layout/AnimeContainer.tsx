import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function AnimeContainer({ children }: LayoutProps) {
  return <div className="grid grid-cols-3 gap-8">{children}</div>;
}

export default AnimeContainer;
