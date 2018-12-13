import {prompt} from "enquirer";
import meow from "meow";
import path from "path";
import {findGitch, getOldData, Gitch, updateGitch} from "./";
import {geocoder} from "./geocode";
import log from "./log";
import {stringify, writeToFile} from "./utils";

const {input, flags} = meow(``);
const [cmd, item] = input;
const cwd = process.cwd();
const {outDir = "data", fileName = "gitches.json"} = flags;
const outFile = path.resolve(cwd, outDir, fileName);


// const foo = async () => {
// 	console.log("foo")
// 	const bar = await geocoder.geocode("Hamburg");
// 	console.log(bar);
// }
// foo();

export interface Results {
	gitch: Gitch;
}

export const gitchFields = [
	{
		message: "Name",
		name: "name",
		required: true,
		validate(value: string) {
			return Boolean(value.trim());
		}
	},
	{
		message: "Github",
		name: "github",
		required: true,
		validate(value: string) {
			return Boolean(value.trim());
		}
	},
	{
		message: "Title",
		name: "title"
	},
	{
		message: "Email",
		name: "email"
	},
	{
		message: "Url",
		name: "url"
	},
	{
		message: "Avatar",
		name: "gravatar"
	},
	{
		message: "City or Address",
		name: "latlon",
		required: true,
		validate(value: string) {
			return Boolean(value.trim());
		}
	},
	{
		message: "Codepen",
		name: "codepen"
	},
	{
		message: "Twitter",
		name: "twitter"
	}
];

export const addGitch = async () => {
	const {gitch} = (await prompt({
		choices: gitchFields,
		message: "Add a gitch:",
		name: "gitch",
		type: "form"
	})) as Results;

	// Get old data
	const oldData = getOldData(outFile);

	// Check required fields
	// @todo better handling. Validate inout
	if (!Boolean(gitch.name) && !Boolean(gitch.github) && !Boolean(gitch.latlon)) {
		log.error("Name, Location and Github are required");
		return;
	}
	const geodata = await geocoder.geocode(gitch.latlon);
	if (!geodata) {
		log.error("Whoops, that didn't work");
		return;
	}
	const [firstHit] = geodata;
	const {latitude, longitude} = firstHit;
	// Check if the gitch already exists
	const newData = {...gitch, latlon: [latitude, longitude]};
	const exists = findGitch(oldData, gitch);
	if (Boolean(exists)) {
		// Warn if the gitch exists and ask for permission to overwrite
		log.warn("This gitch is already part of the bulliverse.");
		const {overwrite} = (await prompt({
			message: `Do you want to overwrite ${gitch.github} (${gitch.name})`,
			name: "overwrite",
			type: "confirm"
		})) as {overwrite: boolean};
		// Check for overwrite
		if (overwrite) {
			// Overwrite the gitch
			const update = updateGitch(oldData, newData);
			await writeToFile(outFile, stringify(update));
		}
		return;
	}
	// Nothing broke? Add a gitch!
	await writeToFile(outFile, stringify([...oldData, newData]));
};

const gitchCli = async () => {
	switch (cmd) {
		case "add":
			return addGitch();
		case "remove":
			break;
		case "edit":
			break;
		default:
			break;
	}
};

gitchCli()
	.then(() => null)
	.catch(log.error);
