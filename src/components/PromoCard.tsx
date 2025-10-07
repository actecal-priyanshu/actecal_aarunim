import React, { useEffect, useState } from "react";
import "./PromoCard.css";

export const PromoCard: React.FC = () => {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		const t = setTimeout(() => setAnimate(true), 50);
		return () => clearTimeout(t);
	}, []);

	return (
		<div className={`promo-wrap hero ${animate ? 'animate' : ''}`}>
			<div className="promo-blob" aria-hidden="true" />
			<div className="promo-card" role="region" aria-label="Promotion">
				<h2 className="promo-title">
					<span>Transform your ideas into </span>
					<span className="promo-underline">reality</span>
				</h2>
				<p className="promo-sub">Creative, intuitive, and powerful!</p>
				<div className="promo-actions">
					<a className="promo-btn primary anim-delay-1" href="#get-started">Get Started</a>
					<div className="learn-wrap anim-delay-2">
						<a className="promo-btn ghost" href="#learn-more">Learn More</a>
					</div>
					<svg className="between-arrow anim-delay-2" width="34" height="18" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M6 18 C 22 10, 38 10, 54 18" stroke="#2d1b2b" strokeWidth="3" strokeLinecap="round"/>
						<path d="M48 14 L54 18 L48 22" stroke="#2d1b2b" strokeWidth="3" strokeLinecap="round"/>
					</svg>
				</div>
				<div className="promo-price anim-delay-3" style={{position: 'fixed',left: '37rem'}} aria-label="Price">
					<span className="value">$19</span>
					<span className="per">/month</span>
				</div>
			</div>
		</div>
	);
};

export default PromoCard;


