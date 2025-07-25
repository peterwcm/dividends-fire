import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Image src="/logo.png" alt="Dividends FIRE" width={320} height={111} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;