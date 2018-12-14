import React from "react";
import {Card, Content} from "../atoms";
export const CodeOfConduct = () => {
	return (
		<Content>
			<header>
				<Content>
					<h1>
						<span>bullgit</span> Code of Conduct
					</h1>
					<h3>A code of conduct for all bullgit members</h3>
				</Content>
			</header>

			<div>
				<Content>
					<small>
						In the document, “the group” refers to bullgit; “gitch” refers to a bullgit
						member; “gitches” refers to all bullgit member
					</small>
				</Content>
				<Card elevation={1}>
					<Content>
						<header>
							<h3>Purpose</h3>
						</header>
						<article>
							<p>
								The goal of this document is to define the best way to interact with
								each other in the group as well as with everyone online.
							</p>

							<p>
								This document doesn’t aim to be restrictive, but as you’re reading
								it, it means you want to know more about bullgit / or you’ve been
								invited to join us, and so, you have to read, understand and respect
								our values, as a friendly group of people.
							</p>

							<p>
								This document defines our behavior expectations from any gitch
								participation in the community, as well as publicly. And the
								consequences that would result if the Code of Conduct isn’t
								respected.
							</p>
						</article>
					</Content>
				</Card>
				<Card elevation={1}>
					<Content>
						<header>
							<h3>Expected Behavior</h3>
						</header>
						<article>
							<p>
								We are an open community, we love all of our gitches and we prone
								respect and love.
							</p>
							<p>
								As bullgit, we respect every person, no matter their religion,
								gender, sex or where they live.{" "}
							</p>

							<p>
								As an open Community we do not tolerate harassment and/or *phobic
								behaviour against people based in their nationality, sexuality,
								religion, gender, or other defining attributes.
							</p>

							<p>
								Our group is based on love and with peace on our mind. We are a
								friendly group and we want to stay friendly, this is our vision of
								bullgit.{" "}
							</p>

							<p>We expect every gitch to respect those terms. </p>
						</article>
					</Content>
				</Card>
				<Card elevation={1}>
					<Content>
						<header>
							<h3>Unacceptable Behavior</h3>
						</header>
						<article>
							<p>
								<strong>Unacceptable behaviors include:</strong>
							</p>
							<ul>
								<li> intimidating</li>
								<li> harassing</li>
								<li> abusive</li>
								<li> discriminatory</li>
								<li> derogatory</li>
								<li> hate speech or demeaning conduct by any gitch.</li>
							</ul>
							<p>
								<strong>Harassment includes:</strong>
							</p>
							<ul>
								<li> offensive verbal comments related to gender</li>
								<li> sexual orientation</li>
								<li> race</li>
								<li> religion</li>
								<li> disability</li>
								<li>
									{" "}
									inappropriate use of nudity and/or sexual images in public
									spaces
								</li>
								<li> deliberate intimidation</li>
								<li> stalking or following</li>
								<li> harassing photography or recording;</li>
							</ul>

							<p>
								As we are evolving on the web, the previous rules are also applied
								for unacceptable behavior publicly online, on social media.
							</p>
						</article>
					</Content>
				</Card>
				<Card elevation={1}>
					<Content>
						<header>
							<h3>Consequences of unacceptable Behaviour</h3>
						</header>
						<article>
							<p>
								If a gitch do not respect nor agree with the terms defined in the
								document, or break our trust by behaving in a total disrespect of
								our terms, we as bullgit, will{" "}
								<strong>ask the person to leave the group definitely</strong>.
							</p>

							<p>
								We cannot accept such behaviour, we don’t want to deal with small
								minded people, we don’t want to be a source of hate nor inflating
								the hate of each other.
							</p>
						</article>
					</Content>
				</Card>
				<Content>
					<p>@bullgit</p>
				</Content>
			</div>
		</Content>
	);
};
