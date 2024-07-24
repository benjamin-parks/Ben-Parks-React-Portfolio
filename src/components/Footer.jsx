import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
    }}>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'center'
      }}>
        <li>
          <a href="https://www.linkedin.com/in/ben-parks-a8b04b214/" style={{ color: '#fff', marginRight: "16px" }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/benjamin-parks" style={{ color: '#fff', marginRight: "16px" }}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://x.com/BunMunKun" style={{ color: '#fff', marginRight: "48px"}}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  );
}