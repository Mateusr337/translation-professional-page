import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="image"></div>
        <div className="links-container">
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Politicas de Privicidade
          </a>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  );
}
