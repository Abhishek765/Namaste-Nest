import Image from 'next/image';
import React from 'react';

const Avatar = () => (
  <Image
    className="rounded-full"
    height={30}
    width={30}
    alt="avatar"
    src={'/images/placeholder.jpg'}
  />
);

export default Avatar;
