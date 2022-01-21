const Logger = require("egg-logger").Logger;
const FileTransport = require("egg-logger").FileTransport;
const ConsoleTransport = require("egg-logger").ConsoleTransport;

module.exports = (options, app) => {
    return async function logger(ctx, next) {
        const logger = new Logger();
        // logger.set("file", new FileTransport({
        //     file: "./logs/",
        //     level: "INFO"
        // }));

        logger.set("console", new ConsoleTransport({
            level: "DEBUG"
        }));

        logger.debug("debug 调试");
        logger.info("info 调试");
        logger.warn("warn 调试");
        // logger.error(new Error("error 调试"));
        await next();
    }
}