import { Container, Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Designed & Created by '}
          <MuiLink color="inherit" href="https://peterwong.me" target="_blank" rel="noreferrer">
            Peter Wong
          </MuiLink>
          {' © '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;