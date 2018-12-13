import React from "react";
import {Icon, InlineLink} from "../atoms";

/**
 * @todo move all molecules to separate @bullgit/<package_name>
 */
export interface SocialLinkProps {
	href?: string;
	icon: string;
}

export const SocialLink: React.FunctionComponent<SocialLinkProps> = (props) => {
	return (
		<InlineLink href={props.href}>
			<Icon>
				<path d={props.icon} />
			</Icon>
		</InlineLink>
	);
}
