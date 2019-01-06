import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {FlattenSimpleInterpolation} from "styled-components";

export const {Provider: GridProvider, Consumer: GridConsumer} = React.createContext({
	columnCount: [],
	columnWidth: 0,
	mq: (cb: (c: number, i: number) => FlattenSimpleInterpolation) => css``
});

export interface BaseProps extends React.HTMLAttributes<HTMLElement> {
	mq?: (cb: (c: number, i: number) => FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
	as?: React.ReactType<any>;
}

const Base = styled("div")<BaseProps>``;

export default Base;
