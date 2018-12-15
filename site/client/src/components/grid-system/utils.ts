import {css} from "@bullgit/styled-components";
import {FlattenSimpleInterpolation} from "styled-components";
import {calc, getPropertyValue, remToPixelRaw} from "../../utils/css";
import {isClient} from "../../utils/helpers";
import {BASELINE, VCOLUMN_COUNT} from "./css";

export const mediaQueries = (
	columnCount: number[],
	columnWidth: number,
	content: (count: number, index: number) => FlattenSimpleInterpolation
) =>
	columnCount &&
	columnCount.slice(1).map((count, index) => {
		const prevCount = columnCount[index];
		const minWidth = (columnWidth * (prevCount + count)) / 2;
		return css`
			@media (min-width: ${minWidth}rem) {
				${content(count, index)};
			}
		`;
	});

export const splitColumn = (columnCount: number): string => calc(VCOLUMN_COUNT, "/", columnCount);

export const getBaseline = (d: Document): number => {
	const baseLine = getPropertyValue(BASELINE);
	return remToPixelRaw(baseLine);
};

export const PXBASELINE = isClient(global, window => getBaseline(window.document), global => 24);
