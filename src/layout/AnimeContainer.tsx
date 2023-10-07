import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function AnimeContainer({ children }: LayoutProps) {
  return <div className="flex flex-wrap gap-8 ">{children}</div>;
}

export default AnimeContainer;
