import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <Image src="/logo.png" alt="Dividends FIRE" className="logo" width={320} height={111} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
