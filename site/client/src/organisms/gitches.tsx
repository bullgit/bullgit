import React from "react";
import {gitches} from "../data/gitches";

/**
 * @todo move all organisms to separate @bullgit/<package_name>
 */
export const Gitches = () => {
	return (
		<React.Fragment>
			<div>
				<h3>{gitches.length} gitches and counting...</h3>
			</div>
			<div>
				{gitches.map(gitch => (
					<div key={gitch.github}>
						<div>
							<a href={gitch.url}>
								<figure>
									<img
										src={
											gitch.gravatar ||
											"https://bullg.it/media/vectors/bullgit-logo.svg"
										}
										alt={gitch.name}
									/>
									<figcaption>{gitch.name}</figcaption>
								</figure>
							</a>
							<div>

								<section>
									{gitch.email && (
										<a target="_blank" href={`mailto:${gitch.email}`}>
											{gitch.email}
										</a>
									)}
									{gitch.url && (
										<a target="_blank" href={gitch.url}>
											{gitch.url}
										</a>
									)}
									{gitch.github && (
										<a
											target="_blank"
											href={`https://github.com/${gitch.github}`}>
											{gitch.github}
										</a>
									)}
									{gitch.twitter && (
										<a
											target="_blank"
											href={`https://twitter.com/${gitch.twitter}`}>
											{gitch.twitter}
										</a>
									)}
									{gitch.codepen && (
										<a
											target="_blank"
											href={`https://codepen.io/${gitch.codepen}`}>
											{gitch.codepen}
										</a>
									)}
								</section>
							</div>
						</div>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};
