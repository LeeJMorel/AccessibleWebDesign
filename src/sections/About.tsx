import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface AboutProps {
  name: string;
  role: string;
  bio: string;
  github?: string;
  linkedin?: string;
  decorativeImage: string;
  altText: string;
}

function About({ name, role, bio, github, linkedin, decorativeImage, altText }: AboutProps) {
  return (
    <section id="about">
      <div className="section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>{`I am ${name}, ${role}. ${bio}`}</p>
          {/* Social media buttons (appear only if github or linkedin links are provided) */}
          {(github || linkedin) && (
            <div className="icons-wrapper">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="3x" className="icon"/>
                  <span className="sr-only">{"Github"}</span>
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon" />
                  <span className="sr-only">{"LinkedIn"}</span>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="decorative-svg">
          <img src={decorativeImage} alt={altText} />
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;