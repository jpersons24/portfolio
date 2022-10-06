// import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Picture from '../profile_photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
   return (
		<div className="about">
			<div id="about" className="container py-5">
				<div className="row">
					<div className="col-lg-6 col-xm-12">
						<div className="photo-wrap mb-5">
							<img
								className="profile-img"
								src={Picture}
								alt="author..."
							/>
						</div>
					</div>
					<div className="col-lg-6 col-xm-12">
						<h1 className="about-heading">about me</h1>
						<p>
							Hi, thanks for visting my page! My name is Jakob
							Persons. I am a full stack software developer,
							proficient with Ruby on Rails, JavaScript(ES6),
							HTML, CSS, React and more.
						</p>
						<h1 className="about-heading">my story</h1>
						<p>
							My story is not what you would call traditional. I graduated with an exercise science degree, dove into sales career head first and landed on my feet in the software programming universe! Starting at a bootcamp with barely any knowledge, I've grown into a full stack software engineer who enjoys taking on any challenge, consuming knowledge, keeping up to date with a constantly changing space and always finding a way to express my personality in my work.
						</p>
						<div className="d-flex justify-content-center">
							<a
								className="social-links"
								id="linkedin"
								href="https://www.linkedin.com/in/jakobpersons/">
								<FontAwesomeIcon
									className="icon"
									icon={faLinkedin}
									size="2x"
								/>
							</a>
							<a
								className="social-links"
								id="twitter"
								href="https://twitter.com/jakob_persons">
								<FontAwesomeIcon
									className="icon"
									icon={faTwitter}
									size="2x"
								/>
							</a>
							<a
								className="social-links"
								id="medium"
								href="https://jakobep24.medium.com/">
								<FontAwesomeIcon
									className="icon"
									icon={faMedium}
									size="2x"
								/>
							</a>
							<a
								className="social-links"
								id="github"
								href="https://github.com/jpersons24">
								<FontAwesomeIcon
									className="icon"
									icon={faGithub}
									size="2x"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
   );
}

export default About;
