import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 ">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Collaboration </header>
        <a className="link link-hover">Chat with Team</a>
        <a className="link link-hover">Notifications</a>
        <a className="link link-hover">Activity Feed</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a>
            <FaTwitter className="text-blue-600" />
          </a>
          <a>
            <FaYoutube className="text-red-600" />
          </a>
          <a>
            <FaFacebook className="text-blue-600" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
