import {css, keyframes, styled} from "@bullgit/styled-components";
import React from "react";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement>;
const spinAnimation = keyframes`
	to {
		transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 360deg) translate3d(0, 200%, 0);
	}
`;

const spinRule = css`
	${spinAnimation} 1s infinite;
`;
export const Spinner = styled("span")<SpinnerProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	height: 3rem;
	width: 3rem;
	transform: translate3d(-50%, -50%, 0);

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		height: 0.5rem;
		width: 0.5rem;
		transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 0deg) translate3d(0, 200%, 0);
		background: black;
		border-radius: 50%;
		animation: ${spinRule};
	}

	&::before {
		animation-delay: -0.25s;
	}
`;
