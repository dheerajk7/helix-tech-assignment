const development = {
  name: "development",
  db: "helix-tech-assignment",
  mongoPath: "mongodb://localhost/heix-tech-assignment-1",
};

module.exports =
  eval(process.env.TEST_ENVIRONMENT_1) == undefined
    ? development
    : eval(process.env.TEST_ENVIRONMENT_1);
