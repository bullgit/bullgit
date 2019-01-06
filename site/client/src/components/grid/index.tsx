import {createGlobalStyle, css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc, cssVar as cv, customProperty as cp, propVal} from "../../utils/css";
import LocalStorage from "../../utils/local-storage";
import {Button, ButtonProps, ButtonRow} from "../button";
import {Column, Grid} from "../grid-system";
import {VBASELINE, VCOLUMN_MARGIN, VCOLUMN_PADDING, VGRID_PADDING, VROW_GAP} from "../grid-system/css";
import {GridProps, StyledGrid} from "../grid-system/grid";

export const WIREFRAME_COLOR = cp("wireframe-color");
export const VWIREFRAME_COLOR = cv(WIREFRAME_COLOR);

export const BASELINE_COLOR = cp("baseline-color");
export const VBASELINE_COLOR = cv(BASELINE_COLOR);

export const Toggles = styled.div`
	padding: 0 0 0 ${VCOLUMN_PADDING};
	position: fixed;
	top: 0;
	right: ${VGRID_PADDING};
	z-index: 100;
`;

export interface StyledColumnMarginProps extends React.HTMLAttributes<HTMLDivElement> {
	baseLine?: boolean;
	colorAlpha: number;
	isShowing?: boolean;
	positionX?: "left" | "right";
	wireFrame?: boolean;
}


export const StyledColumnMargin = styled("div")<StyledColumnMarginProps>`
	position: absolute;
	top: 0;
	bottom: 0;
	${(props) =>
		css`
			${propVal(props.positionX, calc(VCOLUMN_MARGIN, "*", -1))};
		`};
	width: ${VCOLUMN_MARGIN};
	background: hsla(0, 100%, 50%, ${(props) => (props.isShowing ? props.colorAlpha : 0)});
	${(props) =>
		props.wireFrame &&
		css`
			border: 1px solid ${VWIREFRAME_COLOR};
		`};
	border-top: 0;
	border-bottom: 0;
	&:first-child {
		${(props) =>
			props.wireFrame &&
			css`
				box-shadow: -0.5px 0 0 ${VWIREFRAME_COLOR};
			`};
	}
	&:last-child {
		${(props) =>
			props.wireFrame &&
			css`
				box-shadow: 0.5px 0 0 ${VWIREFRAME_COLOR};
			`};
	}
	${(props) =>
		css`
			border-${props.positionX}-width: 0;
		`};
`;

export interface StyledColumnPaddingProps extends React.HTMLAttributes<HTMLDivElement> {
	baseLine?: boolean;
	colorAlpha: number;
	isShowing?: boolean;
	positionX?: "left" | "right";
	wireFrame?: boolean;
}


export const StyledColumnPadding = styled("div")<StyledColumnPaddingProps>`
	position: absolute;
	top: 0;
	bottom: 0;
	${(props) =>
		css`
			${props.positionX}: 0;
		`};
	width: ${VCOLUMN_PADDING};
	background: hsla(180, 100%, 50%, ${(props) => (props.isShowing ? props.colorAlpha : 0)});
	${(props) =>
		props.wireFrame &&
		css`
			border: 1px solid ${VWIREFRAME_COLOR};
		`};
	border-top: 0;
	border-bottom: 0;
	${(props) =>
		css`
			border-${props.positionX}: 0;
		`};
`;

export interface StyledGridOverlayProps extends React.HTMLAttributes<HTMLElement> {
	baseLine?: boolean;
	colorAlpha: number;
	isShowing?: boolean;
	wireFrame?: boolean;
}


// display: ${(props: StyledGridOverlayProps) => (props.isShowing ? "flex" : "none")};
const StyledGridOverlay = styled("aside")<StyledGridOverlayProps>`
	position: absolute;
	z-index: 99;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	min-height: 100vh;
	pointer-events: none;
	align-items: stretch;
	align-content: stretch;
	justify-content: stretch;
	overflow: hidden;
	display: flex;
	${(props: StyledColumnMarginProps) =>
		props.baseLine &&
		css`
			background: linear-gradient(to bottom, ${VBASELINE_COLOR} 1px, transparent 1px) 0 ${calc(VROW_GAP, "/", 2)};
			background-size: 100% ${VBASELINE};
		`};

	${StyledGrid} {
		height: 100%;
		position: relative;
		padding: 0 !important;
	}
`;

interface ToggleProps extends ButtonProps {
	isActive?: boolean;
}

const Toggle = styled(Button)<ToggleProps>`
	box-shadow: none;
	background: ${(props: any) => (props.isActive ? "green" : "red")};
	color: white;
`;

export const StyledGridPadding = styled("div")<StyledColumnMarginProps>`
	height: 100%;
	width: var(--bullgit-grid-padding);
	background: hsla(90, 100%, 50%, ${(props) => (props.isShowing ? props.colorAlpha : 0)});
	${(props) =>
		props.wireFrame &&
		css`
			box-shadow: 1px 0 0 ${VWIREFRAME_COLOR}, -1px 0 0 ${VWIREFRAME_COLOR};
		`};
`;

export const Flex = styled.div`
	flex: 1;
	display: flex;
	flex-wrap: nowrap;
	overflow: hidden;
`;

export interface GlobalStyleProps {
	baseLineColor: string;
	wireFrameColor: string;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
	:root {
	${(props) => css`
		${propVal(BASELINE_COLOR, props.baseLineColor)};
		${propVal(WIREFRAME_COLOR, props.wireFrameColor)};
	`};
`;

export interface GridOverlayProps extends GridProps  {
	baseLine?: boolean;
	colorAlpha: number;
	isShowing?: boolean;
	wireFrame?: boolean;
}


export interface GridOverlayState {
	baseLine?: boolean;
	isShowing?: boolean;
	wireFrame?: boolean;
}

class GridOverlay extends React.Component<GridOverlayProps & GlobalStyleProps, GridOverlayState> {
	public store: LocalStorage = new LocalStorage("bullgit-grid-overlay");
	public state: GridOverlayState = {
		baseLine: this.props.baseLine,
		isShowing: this.props.isShowing,
		wireFrame: this.props.wireFrame
	};

	public static get defaultProps() {
		return {
			baseLineColor: "rgba(0, 0, 0, 0.25)",
			colorAlpha: 0.25,
			wireFrameColor: "rgba(0, 0, 0, 0.25)"
		};
	}

	private lastColumnIndex: number = this.props.columnCount.length - 1;
	private columnCount: number = this.props.columnCount[this.lastColumnIndex];
	private columns: number[] = Array(this.columnCount)
		.fill(Boolean)
		.map((x, i) => i);
	private columnStyle: React.CSSProperties = {
		backgroundClip: "content-box",
		height: "100%",
		position: "relative"
	};

	public componentDidMount() {
		this.setState({
			baseLine: Boolean(this.store.getItem("baseline")),
			isShowing: Boolean(this.store.getItem("colors")),
			wireFrame: Boolean(this.store.getItem("wireframe"))
		});
	}

	public render() {
		return (
			<React.Fragment>
				<GlobalStyle baseLineColor={this.props.baseLineColor} wireFrameColor={this.props.wireFrameColor} />
				<Toggles>
					<ButtonRow>
						<Toggle
							onClick={this.toggleGrid}
							iconName="viewGrid"
							isActive={this.state.isShowing}
							hideText={true}>
							{this.state.isShowing ? "Hide" : "Show"}
						</Toggle>
						<Toggle
							onClick={this.toggleWire}
							iconName="wireframe"
							isActive={this.state.wireFrame}
							hideText={true}>
							{this.state.wireFrame ? "Hide" : "Show"}
						</Toggle>
						<Toggle
							onClick={this.toggleBaseline}
							iconName="formatLineSpacing"
							isActive={this.state.baseLine}
							hideText={true}>
							{this.state.baseLine ? "Hide" : "Show"}
						</Toggle>
					</ButtonRow>
				</Toggles>
				<StyledGridOverlay {...this.state} colorAlpha={this.props.colorAlpha}>
					<Grid {...this.props}>
						<StyledGridPadding {...this.state} colorAlpha={this.props.colorAlpha} />
						<Flex>
							{this.columns.map(column => (
								<Column
									key={column}
									style={{
										...this.columnStyle,
										backgroundColor: `hsla(270, 100%, 50%, ${
											this.state.isShowing ? this.props.colorAlpha : 0
										})`
									}}>
									<StyledColumnMargin
										positionX="left"
										{...this.state}
										colorAlpha={this.props.colorAlpha}
									/>
									<StyledColumnPadding
										positionX="left"
										{...this.state}
										colorAlpha={this.props.colorAlpha}
									/>
									<StyledColumnPadding
										positionX="right"
										{...this.state}
										colorAlpha={this.props.colorAlpha}
									/>
									<StyledColumnMargin
										positionX="right"
										{...this.state}
										colorAlpha={this.props.colorAlpha}
									/>
								</Column>
							))}
						</Flex>
						<StyledGridPadding {...this.state} colorAlpha={this.props.colorAlpha} />
					</Grid>
				</StyledGridOverlay>
			</React.Fragment>
		);
	}

	private toggleGrid = i => {
		this.setState(
			(prevState: GridOverlayState) => ({isShowing: !prevState.isShowing}),
			() => {
				if (this.state.isShowing) {
					this.store.setItem("colors", "true");
				} else {
					this.store.removeItem("colors");
				}
			}
		);
	};
	private toggleWire = i => {
		this.setState(
			(prevState: GridOverlayState) => ({wireFrame: !prevState.wireFrame}),
			() => {
				if (this.state.wireFrame) {
					this.store.setItem("wireframe", "true");
				} else {
					this.store.removeItem("wireframe");
				}
			}
		);
	};
	private toggleBaseline = i => {
		this.setState(
			(prevState: GridOverlayState) => ({baseLine: !prevState.baseLine}),
			() => {
				if (this.state.baseLine) {
					this.store.setItem("baseline", "true");
				} else {
					this.store.removeItem("baseline");
				}
			}
		);
	};
}

export default GridOverlay;
