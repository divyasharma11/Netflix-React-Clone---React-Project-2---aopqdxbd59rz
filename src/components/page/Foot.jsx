import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './Style.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Foot = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <Link to={"https://www.facebook.com/NetflixIN/?brand_redir=475822799216240"}>
        <FacebookIcon className="footer-icon"/>
        </Link>
        <Link to={"https://www.instagram.com/netflix/?hl=en"}>
        <InstagramIcon className="footer-icon" />
        </Link>
        <Link to={"https://twitter.com/netflixindia?lang=en"}>
        <TwitterIcon className="footer-icon" />
        </Link>
        <Link to={"https://www.youtube.com/@NetflixIndiaOfficial"}>
        <YouTubeIcon className="footer-icon" />
        </Link>
      </div>
      <div className="footer-sectionlist">
        <ul className="footer-sectionList" type="none">
          <li className="footer-items">Audio Description</li>
          <li className="footer-items">Investor Relations</li>
          <li className="footer-items">Legal Notices</li>
        </ul>

        <ul className="footer-sectionList" type="none">
          <li className="footer-items">Help Centre</li>
          <li className="footer-items">Jobs</li>
          <li className="footer-items">Cookie Preference</li>
        </ul>

        <ul className="footer-sectionList" type="none">
          <li className="footer-items">Gift Cards</li>
          <li className="footer-items">Terms of use</li>
          <li className="footer-items">Corporate Information</li>
        </ul>

        <ul className="footer-sectionList" type="none">
          <li className="footer-items">Media Centre</li>
          <li className="footer-items">privacy</li>
          <li className="footer-items">Contact Us</li>
        </ul>
      </div>
      <div className="service">Service Code</div>
      <div className="copy-text">&copy;{"  "}2023 Netflix Clone.</div>
    </footer>
  );
};

export default Foot;