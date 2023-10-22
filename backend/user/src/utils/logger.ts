import log4js from "log4js";

export const initLogger = () => {
  log4js.configure({
    appenders: {
      log: { type: "stdout" },
    },
    categories: {
      default: {
        appenders: ["log"],
        level: "info",
      },
    },
  });
};

export const getLogger = () => {
  return log4js.getLogger();
};
