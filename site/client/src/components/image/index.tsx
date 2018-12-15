import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {FlattenSimpleInterpolation} from "styled-components";
import {calc, cssVar, customProperty, parens, propVal} from "../../utils/css";
import {GridConsumer} from "../grid-system";
import {VBASELINE, VCOLSPAN, VCOLUMN_MARGIN, VCOLUMN_PADDING, VGRID_PADDING} from "../grid-system/css";
import {getBaseline, PXBASELINE} from "../grid-system/utils";

export interface StyledImageCSSProperties extends React.CSSProperties {
	"--height"?: string;
	"--width"?: string;
}

export interface StyledFigureProps extends React.HTMLAttributes<HTMLElement> {
	style?: StyledImageCSSProperties;
	floatImage?: "left" | "right";
	removeGap?: "both" | "bottom" | "top";
	floatWidth?: number[];
	mq?: (cb: (c: number, i: number) => FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
}


const WIDTH = customProperty("image-width");
const HEIGHT = customProperty("image-height");
const FLOAT_WIDTH = customProperty("image-float-width");

const paddingAndMargin = parens(VCOLUMN_MARGIN, "+", VCOLUMN_PADDING);
const floatWidth = (props: StyledImageProps): number | undefined => props.floatWidth && props.floatWidth[0];
const gridWidth = parens("100%", "+", paddingAndMargin, "*", 2);
const columnWidth = [gridWidth, "/", VCOLSPAN].join(" ");

const figureWidth = (props: StyledImageProps): string => {
	if (Boolean(props.floatImage)) {
		return calc(columnWidth, "*", cssVar(FLOAT_WIDTH, floatWidth(props)), "-", paddingAndMargin, "*", 2);
	}
	return cssVar(WIDTH, "auto");
};

const figureFloat = (props: StyledImageProps): FlattenSimpleInterpolation =>
	Boolean(props.floatImage) &&
	css`
		float: ${props.floatImage};
		margin-${props.floatImage === "left" ? "right" : "left"}: ${calc(paddingAndMargin, "*", 2)};
	`;

const figureMq = (props: StyledImageProps): FlattenSimpleInterpolation =>
	props.floatWidth &&
	props.mq(
		(c, i) => css`
			${propVal(FLOAT_WIDTH, props.floatWidth[i + 1])};
		`
	);

const StyledFigure = styled("figure")<StyledFigureProps>`
	position: relative;
	display: inline-flex;
	vertical-align: bottom;
	align-items: flex-start;
	align-content: flex-start;
	justify-content: flex-start;
	width: ${figureWidth};
	height: ${cssVar(HEIGHT, "auto")};
	min-height: 3rem;
	min-width: 100%;
	padding: 0;
	margin: ${(props: StyledImageProps): string | number => {
		if (props.removeGap === "both") {
			return `0 0 0 0`;
		}
		if (props.removeGap === "bottom") {
			return `${VBASELINE} 0 0}`;
		}
		if (props.removeGap === "top") {
			return `0 0 ${VBASELINE}`;
		}
		return `${calc(VBASELINE, "/", 4, "*", 3)} 0 ${calc(VBASELINE, "/", 4, "*", 5)}`;
	}};
	align-self: flex-start;
	${figureFloat};
	${figureMq};
`;

export interface StyledImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	style?: StyledImageCSSProperties;
	floatImage?: "left" | "right";
	floatWidth?: number[];
	loading?: boolean;
	removePadding?: "both" | "left" | "right";
	removeMargin?: "both" | "left" | "right";
	removeGridPadding?: "both" | "left" | "right";
	removeGap?: "both" | "top" | "bottom";
	mq?: (cb: (c: number, i: number) => FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
}


const imageWidth = (props: StyledImageProps) => {
	if (props.removeGridPadding === "both") {
		return calc("100%", "+", parens(paddingAndMargin, "+", VGRID_PADDING), "*", 2);
	}
	if (props.removeGridPadding === "left") {
		return calc(
			"100%",
			"+",
			parens(paddingAndMargin, "+", VGRID_PADDING),
			...(props.removeMargin === "right"
				? ["+", paddingAndMargin]
				: props.removePadding === "right"
					? ["+", VCOLUMN_PADDING]
					: [])
		);
	}
	if (props.removeGridPadding === "right") {
		return calc(
			"100%",
			"+",
			parens(paddingAndMargin, "+", VGRID_PADDING),
			...(props.removeMargin === "left"
				? ["+", paddingAndMargin]
				: props.removePadding === "left"
					? ["+", VCOLUMN_PADDING]
					: [])
		);
	}
	if (props.removeMargin === "both") {
		return calc("100%", "+", paddingAndMargin, "*", 2);
	}
	if (props.removeMargin === "left" || props.removeMargin === "right") {
		return calc("100%", "+", paddingAndMargin);
	}
	if (props.removePadding === "both") {
		return calc("100%", "+", VCOLUMN_PADDING, "*", 2);
	}
	if (props.removePadding === "left" || props.removePadding === "right") {
		return calc("100%", "+", VCOLUMN_PADDING);
	}
	return null;
};

export const StyledImage = styled("img")<StyledImageProps>`
	display: inline-block;
	height: ${cssVar(HEIGHT, "auto")};
	max-height: 100%;
	min-height: 100%;
	width: ${(props) => imageWidth(props) || "100%"};
	max-width: ${(props) => imageWidth(props) || "100%"};
	min-width: 100%;
	margin-left: ${(props) => {
		if (props.removeGridPadding === "both" || props.removeGridPadding === "left") {
			return calc(parens(paddingAndMargin, "+", VGRID_PADDING), "*", "-1");
		}
		if (props.removeMargin === "left" || props.removeMargin === "both") {
			return calc(paddingAndMargin, "*", -1);
		}
		if (props.removePadding === "left" || props.removePadding === "both") {
			return calc(VCOLUMN_PADDING, "*", -1);
		}
		return "0";
	}};
	margin-right: ${(props) => {
		if (props.removeGridPadding === "both" || props.removeGridPadding === "right") {
			return calc(parens(paddingAndMargin, "+", VGRID_PADDING), "*", "-1");
		}
		if (props.removeMargin === "right" || props.removeMargin === "both") {
			return calc(paddingAndMargin, "*", -1);
		}
		if (props.removePadding === "right" || props.removePadding === "both") {
			return calc(VCOLUMN_PADDING, "*", -1);
		}
		return "0";
	}};
	opacity: ${(props) => (props.loading ? 0 : 1)};
	object-fit: cover;
	object-position: 50% 50%;
`;


export type LoadingImageProps = React.HTMLAttributes<HTMLSpanElement>;

export const LoadingImage = styled("span")<LoadingImageProps>`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: whitesmoke;
`;

export type ImageProps = StyledImageProps;

export interface ImageState {
	loading?: boolean;
	height?: string;
	baseline?: number;
	width?: string;
}

class ImageMedia extends React.Component<ImageProps, ImageState> {
	public state: ImageState = {
		baseline: isNaN(PXBASELINE) ? 24 : PXBASELINE
	};
	private aspectRatio: number = 1;
	private readonly image: React.RefObject<any>;
	private readonly figure: React.RefObject<any>;

	public constructor(props) {
		super(props);
		this.image = React.createRef();
		this.figure = React.createRef();
	}
	public componentDidMount() {
		this.setState({
			baseline: getBaseline(document)
		});
		window.addEventListener("resize", this.handleResize, {
			passive: true
		});
		const img = this.image;
		if (img && img.current.naturalWidth) {
			this.handleInitial();
		} else {
			this.setState({
				loading: true
			});
		}
	}

	public componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	public shouldComponentUpdate(newProps, newState) {
		if (newProps.src !== this.props.src) {
			return true;
		}
		if (newState.height !== this.state.height) {
			return true;
		}
		if (newState.width !== this.state.width) {
			return true;
		}
		if (newState.loading !== this.state.loading) {
			return true;
		}
		return false;
	}

	public render() {
		return (
			<GridConsumer>
				{grid => (
					<StyledFigure
						ref={this.figure}
						floatImage={this.props.floatImage}
						floatWidth={this.props.floatWidth}
						removeGap={this.props.removeGap}
						as={this.props.floatImage ? "span" : "figure"}
						mq={grid.mq}
						style={{...this.props.style, [HEIGHT]: this.state.height, [WIDTH]: this.state.width}}>
						<StyledImage
							{...this.props}
							ref={this.image}
							onLoad={this.handleLoad}
							mq={grid.mq}
							loading={this.state.loading}
						/>
						{this.state.loading && <LoadingImage />}
					</StyledFigure>
				)}
			</GridConsumer>
		);
	}

	private handleLoad = e => {
		const {current: node} = this.figure;
		const {height: originalHeight, width} = node.getBoundingClientRect();
		const {naturalHeight, naturalWidth} = this.image.current;
		this.aspectRatio = naturalWidth / naturalHeight;
		const height = `${this.height(originalHeight)}px`;
		this.setState({height, loading: false, width: `${width}px`}, () => {
			if (typeof this.props.onLoad === "function") {
				this.props.onLoad(e);
			}
		});
	};

	private handleInitial = () => {
		const {current: node} = this.figure;
		const {height: originalHeight, width} = node.getBoundingClientRect();
		const {naturalHeight, naturalWidth} = this.image.current;
		this.aspectRatio = naturalWidth / naturalHeight;
		const height = `${this.height(originalHeight)}px`;
		this.setState({height, loading: false, width: `${width}px`});
	};

	private handleResize = () => {
		const {current: node} = this.figure;
		this.setState({height: "auto", width: "auto"}, () => {
			const {width} = node.getBoundingClientRect();
			const originalHeight = width / this.aspectRatio;
			const height = `${this.height(originalHeight)}px`;
			this.setState({height, width: `${width}px`});
		});
	};

	private height = (originalHeight: number) => Math.ceil(originalHeight / this.state.baseline) * this.state.baseline;
}

export default ImageMedia;
