import React from "react";
import {List, ListItem} from "../list";
import {DropdownProps, RefDropdown as Dropdown} from "./index";

export type DropdownContainerProps = DropdownProps;

export interface DropdownContainerState {
	isOpen?: boolean;
}

export class DropdownContainer extends React.Component<DropdownContainerProps, DropdownContainerState> {
	public state: DropdownContainerState = {};

	private readonly dropdown: any = React.createRef();

	public componentDidMount() {
		document.addEventListener("click", this.handleDocumentClick);
	}

	public componentWillUnmount() {
		document.removeEventListener("click", this.handleDocumentClick);
	}

	public handleDocumentClick = (e: MouseEvent) => {
		if (this.dropdown.current && !this.dropdown.current.contains(e.target as Node)) {
			this.setState({
				isOpen: false
			});
		}
	};

	public render() {
		return (
			<Dropdown
				isOpen={this.state.isOpen}
				ref={this.dropdown}
				textLabel={this.props.textLabel}
				onClick={this.toggle}>
				<List flatList={true} removeGap={true}>
					{React.Children.map(this.props.children, (child, index) => (
						<ListItem>{child}</ListItem>
					))}
				</List>
			</Dropdown>
		);
	}

	private toggle = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	};

	private open = () => {
		this.setState(prevState => ({
			isOpen: true
		}));
	};

	private close = () => {
		this.setState(prevState => ({
			isOpen: false
		}));
	};
}

export default DropdownContainer;
