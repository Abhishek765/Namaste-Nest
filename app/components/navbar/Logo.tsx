'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt="logo"
      src="/images/NavLogo.png"
      height={60}
      width={60}
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
