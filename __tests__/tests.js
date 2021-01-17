process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

const jest = require("jest");
const argv = process.argv.slice(2);
argv.push("--coverage");

// Watch unless --no-watch or running in CI
if (argv.indexOf("--no-watch") == -1 && !process.env.CI) {
  argv.push("--watchAll");
}

jest.run(argv);
