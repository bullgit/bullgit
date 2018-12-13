import {createLogger, format, transports} from "winston";

/**
 * A simple logger with colors
 */
const log = createLogger({
	format: format.combine(
		format.json(),
		format.colorize(),
		format.simple(),
		format.printf(info => info.message)
	),
	level: process.env.LOG_LEVEL,
	transports: [new transports.Console()]
});

export default log;
