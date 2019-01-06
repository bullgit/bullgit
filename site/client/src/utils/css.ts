import {css} from "@bullgit/styled-components";
import {FlattenSimpleInterpolation} from "styled-components";
import {isClient} from "./helpers";

export type PixelValue = number;
export type Pixel = string;
export type RemValue = number;
export type Rem = string;
export type VarFunction = string;
export type VarId = string | number;
export type VarName = string;
export type VarPrefix = string;
export type Value = string | number;
export type VarNameWithVal = string;
export type CalcParts = Value[];
export type Calc = string;
export type Parens = string;

export const documentElement: HTMLHtmlElement | null = isClient(
	global,
	window => window.document.querySelector(":root"),
	global => null
);

export const getPropertyValue = (name: string, context: HTMLElement = documentElement): string =>
	context ? window.getComputedStyle(context).getPropertyValue(name) : "";

export const getRem = window => {
	const {fontSize} = window.getComputedStyle(document.documentElement);
	return parseInt(fontSize, 10);
};

export const getLineHeight = window => {
	const {lineHeight} = window.getComputedStyle(document.documentElement);
	return parseFloat(lineHeight);
};

export const REM: number = isClient(global, window => getRem(window), global => 16);
export const LINE_HEIGHT: number = isClient(global, window => getLineHeight(window), global => 24);

export const pixelToRem = (p: PixelValue | Pixel): Rem => `${parseFloat(`${p}`) / REM}rem`;
export const pixelToRemRaw = (p: PixelValue | Pixel): RemValue => parseFloat(`${p}`) / REM;
export const remToPixel = (r: RemValue | Rem): Pixel => `${parseFloat(`${r}`) * REM}px`;
export const remToPixelRaw = (r: RemValue | Rem): PixelValue => parseFloat(`${r}`) * REM;
export const rem = (n: RemValue): Rem => `${n}rem`;
export const customProperty = (id: VarId, prefix: VarPrefix = "bullgit"): VarName => `--${prefix}-${id}`;

export const cssVar = (name: VarName, fallback: Value = undefined): VarFunction =>
	`var(${[name, fallback].filter(Boolean).join(", ")})`;

export const customCssVar = (id: VarId, prefix: VarPrefix = "bullgit", fallback: Value = undefined): VarFunction =>
	cssVar(customProperty(id, prefix), fallback);

export const propVal = (name: VarName, value: Value = ""): VarNameWithVal => `${name}:${value}`;

const cleanArr = (arr: CalcParts): CalcParts => arr.map(x => `${x || x === 0 ? x : ""}`.trim()).filter(Boolean);
export const calc = (...arr: CalcParts): Calc => {
	const cleaned = cleanArr(arr);
	if (cleaned.length > 1) {
		return `calc(${arr.join(" ")})`;
	}
	return cleaned.join();
};

export const parens = (...arr: CalcParts): Parens => `(${cleanArr(arr).join(" ")})`;
export const mediaQuery = (maxWidth: PixelValue, content: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
	@media only screen and (max-width: ${maxWidth / REM}rem) {${content}
`;
