import React from 'react';
import './ElevateSection.css';

const ElevateSection: React.FC = () => {
	return (
		<section className="elevate-wrap">
			<div className="elevate-inner">
				<div className="elevate-left">
					<h2 className="elevate-title">Elevate your digital experience</h2>
					<p className="elevate-sub">Intuitive solutions designed for modern businesses</p>
					<a href="#features" className="elevate-cta">Explore Features</a>
				</div>
				<div className="elevate-right">
					<div className="note">
						<div className="note-pin" aria-hidden="true" />
						<p className="note-text">“Game changer for our team!”</p>
						<span className="note-star">★</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ElevateSection;


