import Logger, { type LoggerConfig } from "./logger.ts";

const config: LoggerConfig = {
    loader: ["•", "◦", "⦿", "⦾", "◉", "◎", "⦾", "⦿", "◦", "•"],
    iteration: 10,
    delay: 100,
};

const logger = new Logger("Loading", config);
logger.log();
