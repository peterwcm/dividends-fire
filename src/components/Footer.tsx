const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <span>Designed & Created by </span>
        <a href="https://peterwong.me" target="_blank" rel="noreferrer">Peter Wong</a>
        <span> © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
