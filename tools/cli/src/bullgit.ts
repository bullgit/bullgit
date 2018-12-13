import meow from "meow";
import path from "path";
import {getRepos, writeRepos} from "./";
import log from "./log";
import {stringify} from "./utils";

const {input, flags} = meow(``);
const [cmd] = input;

const cwd = process.cwd();

const {outDir = "data", fileName = "repos.json"} = flags;
const outFile = path.resolve(cwd, outDir, fileName);

const bullgitCli = async () => {
	switch (cmd) {
		case "repos":
			if (flags.write) {
				writeRepos(outFile);
				log.info("Repos written to File System");
			}
			if (flags.log) {
				log.info(stringify(await getRepos()));
			} else {
				log.warn("No flag provided");
			}
			break;
		default:
			break;
	}
};

bullgitCli()
	.then(() => null)
	.catch(log.error);
