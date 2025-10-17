import React from 'react';
import './AppsIntro.css';

const AppsIntro: React.FC = () => {
	return (
		<section className="apps-intro">
			<h3 className="intro-title">Imagine a vast collection of business apps at your disposal.</h3>
			<p className="intro-line">Got something to improve? There is an app for that.</p>
			<p className="intro-line">No complexity, no cost, just a one-click install.</p>
			<p className="intro-line">Each app simplifies a process and empowers more people.</p>
			<p className="intro-line">Imagine the impact when everyone gets the right tool for the job, with perfect integration.</p>

			<div className="intro-quote">
				<span className="tape" aria-hidden="true" />
				<span className="badge"><i className="fa-regular fa-face-smile" aria-hidden="true"></i></span>
				<span className="quote-text">If you simplify everything, you can do anything!</span>
				<span className="quote-meta">— Bill McDermott, former CEO of SAP</span>
			</div>
		</section>
	);
};

export default AppsIntro;


