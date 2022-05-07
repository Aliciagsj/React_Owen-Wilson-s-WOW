import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__copy">© 2022 Alicia González</small>
      <nav className="footer__rrss">
        <a
          href="https://github.com/Aliciagsj"
          className="footer__rrss--link"
          target="blank"
        >
          <i className="footer__rrss--icons fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alicia-gonz%C3%A1lez-san-juan/"
          className="footer__rrss--link"
          target="blank"
        >
          <i className="footer__rrss--icons fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/aliciagonsj"
          className="footer__rrss--link"
          target="blank"
        >
          <i className="footer__rrss--icons fab fa-twitter-square"></i>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
