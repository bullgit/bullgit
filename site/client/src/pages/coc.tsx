import React from "react";
import {Column} from '../components/grid-system';
import {defaultGrid} from "../components/grid-system/config";
import {List, ListItem} from "../components/list";
import Main from "../components/main";
import Copy from "../components/text/copy";
import Headline from "../components/text/headline";

export const CodeOfConduct = () => {
	return (
		<Main {...defaultGrid}>
			<Column as={"header"} fullWidth={true}>
					<Headline as={"h1"}>
						Bullgit Code of Conduct
					</Headline>
					<Headline as={"h3"}>A code of conduct for all bullgit members</Headline>
			</Column>

			<Column fullWidth>
				<header>
					<Copy textSize={"small"}>
						In the document, “the group” refers to bullgit; “gitch” refers to a bullgit
						member; “gitches” refers to all bullgit member
					</Copy>
				</header>
				<section>
					<header>
						<Headline as={"h3"}>Purpose</Headline>
					</header>
					<article>
						<Copy>
							The goal of this document is to define the best way to interact with
							each other in the group as well as with everyone online.
						</Copy>

						<Copy>
							This document doesn’t aim to be restrictive, but as you’re reading it,
							it means you want to know more about bullgit / or you’ve been invited to
							join us, and so, you have to read, understand and respect our values, as
							a friendly group of people.
						</Copy>

						<Copy>
							This document defines our behavior expectations from any gitch
							participation in the community, as well as publicly. And the
							consequences that would result if the Code of Conduct isn’t respected.
						</Copy>
					</article>
				</section>
				<section>
					<header>
						<Headline as={"h3"}>Expected Behavior</Headline>
					</header>
					<article>
						<Copy>
							We are an open community, we love all of our gitches and we prone
							respect and love.
						</Copy>
						<Copy>
							As bullgit, we respect every person, no matter their religion, gender,
							sex or where they live.{" "}
						</Copy>

						<Copy>
							As an open Community we do not tolerate harassment and/or *phobic
							behaviour against people based in their nationality, sexuality,
							religion, gender, or other defining attributes.
						</Copy>

						<Copy>
							Our group is based on love and with peace on our mind. We are a friendly
							group and we want to stay friendly, this is our vision of bullgit.{" "}
						</Copy>

						<Copy>We expect every gitch to respect those terms. </Copy>
					</article>
				</section>
				<section>
					<header>
						<Headline as={"h3"}>Unacceptable Behavior</Headline>
					</header>
					<article>
						<Copy>
							<strong>Unacceptable behaviors include:</strong>
						</Copy>
						<List>
							<ListItem> intimidating</ListItem>
							<ListItem> harassing</ListItem>
							<ListItem> abusive</ListItem>
							<ListItem> discriminatory</ListItem>
							<ListItem> derogatory</ListItem>
							<ListItem> hate speech or demeaning conduct by any gitch.</ListItem>
						</List>
						<Copy>
							<strong>Harassment includes:</strong>
						</Copy>
						<List>
							<ListItem> offensive verbal comments related to gender</ListItem>
							<ListItem> sexual orientation</ListItem>
							<ListItem> race</ListItem>
							<ListItem> religion</ListItem>
							<ListItem> disability</ListItem>
							<ListItem>
								inappropriate use of nudity and/or sexual images in public spaces
							</ListItem>
							<ListItem> deliberate intimidation</ListItem>
							<ListItem> stalking or following</ListItem>
							<ListItem> harassing photography or recording;</ListItem>
						</List>

						<Copy>
							As we are evolving on the web, the previous rules are also applied for
							unacceptable behavior publicly online, on social media.
						</Copy>
					</article>
				</section>
				<section>
					<header>
						<Headline as={"h3"}>Consequences of unacceptable Behaviour</Headline>
					</header>
					<article>
						<Copy>
							If a gitch do not respect nor agree with the terms defined in the
							document, or break our trust by behaving in a total disrespect of our
							terms, we as bullgit, will{" "}
							<strong>ask the person to leave the group definitely</strong>.
						</Copy>

						<Copy>
							We cannot accept such behaviour, we don’t want to deal with small minded
							people, we don’t want to be a source of hate nor inflating the hate of
							each other.
						</Copy>
					</article>
				</section>
				<footer>
					<Copy>@bullgit</Copy>
				</footer>
			</Column>
		</Main>
	);
};
