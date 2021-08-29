/* eslint-disable react/no-array-index-key */
import { loaderDelay, navDelay } from "@utils/index";
import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { siteData } from "../../config";

const StyledHeroSection = styled.section`
	${({ theme }) => theme.mixins.flexCenter};
	flex-direction: column;
	align-items: flex-start;
	min-height: 100vh;

	h1 {
		margin: 0 0 30px 4px;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
		font-weight: 400;

		@media (max-width: 480px) {
			margin: 0 0 20px 2px;
		}
	}

	h3 {
		margin-top: 10px;
		color: var(--slate);
		line-height: 0.9;
	}

	p {
		margin: 20px 0 0;
		max-width: 500px;
	}

	.email-link {
		${({ theme }) => theme.mixins.bigButton};
		margin-top: 50px;
	}
`;

function Hero(): JSX.Element {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, navDelay);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const one = <h1>Hi, my name is</h1>;
	const two = <h2 className="big-heading">Hazim Arafa.</h2>;
	const three = <h3 className="big-heading">I build things for the web.</h3>;
	const four = (
		<p style={{ marginTop: "15px" }}>
			I'm a self-taught full-stack engineer and hobbyist programmer
			specializing in React and Golang.
		</p>
	);
	const five = (
		<a href={`mailto:${siteData.email}`} className="email-link">
			Contact Me
		</a>
	);

	const items = [one, two, three, four, five];

	return (
		<StyledHeroSection>
			<TransitionGroup component={null}>
				{isMounted &&
					items.map((item, i) => (
						<CSSTransition
							key={i}
							classNames="fadeup"
							timeout={loaderDelay}
						>
							<div style={{ transitionDelay: `${i + 1}00ms` }}>
								{item}
							</div>
						</CSSTransition>
					))}
			</TransitionGroup>
		</StyledHeroSection>
	);
}

// eslint-disable-next-line import/no-default-export
export default Hero;
