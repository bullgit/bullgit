import {prompt} from "enquirer";
import meow from "meow";
import path from "path";
import {findGitch, getOldData, gitchFields, Results, updateGitch} from "./";
import log from "./log";
import {stringify, writeToFile} from "./utils";

const {input, flags} = meow(``);
const [cmd, item] = input;
const cwd = process.cwd();
const {outDir = "data", fileName = "gitches.json"} = flags;
const outFile = path.resolve(cwd, outDir, fileName);

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
	if (!Boolean(gitch.name) && !Boolean(gitch.github)) {
		log.error("Name and Github are required");
		return;
	}
	// Check if the gitch already exists
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
			const update = updateGitch(oldData, gitch);
			await writeToFile(outFile, stringify(update));
		}
		return;
	}
	// Nothing broke? Add a gitch!
	await writeToFile(outFile, stringify([...oldData, gitch]));
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
