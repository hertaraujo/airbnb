'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      className="hidden md:block cursor-pointer"
      width="100"
      height="100"
    />
  );
};
