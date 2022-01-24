export default function Footer() {
  return (
    <footer>
      <div className="footer-1">
        <img src="/icon.png" alt="Site Icon" className="site-icon" />
        <span>CubingSoda</span>
      </div>
      <div className="footer-2">
        <span>Copyright &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
