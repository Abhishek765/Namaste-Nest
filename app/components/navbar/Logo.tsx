import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Link href={'/'}>
    <Image
      alt="logo"
      src="/images/NavLogo.png"
      height={60}
      width={60}
      className="hidden md:block cursor-pointer"
    />
  </Link>
);
export default Logo;
