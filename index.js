// Note about the mono repository for the most unlikely case,
// that someone tries to use import or run this file.

/**
 * Inform about non existing module
 */
const echo = () => {
	console.log(
		"This is a Mono repository. Please use the packages @bullgit/* released via this repository"
	);
};
// Run it on import
echo();
// Run it when called
module.exports = echo;
