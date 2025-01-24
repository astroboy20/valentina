'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';


export default function Wrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery("768px")

 
  if (!isMobile) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 text-gray-800">
        <p className="text-xl font-medium">
          Please access this site from a mobile device for the best experience.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}