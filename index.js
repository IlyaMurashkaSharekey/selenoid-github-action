const { execSync } = require("child_process");

const startupTimeout = process.env.SESSION_STARTUP_TIMEOUT || '60s';
const attemptTimeout = process.env.SESSION_ATTEMPT_TIMEOUT || '60s';
const deleteTimeout = process.env.SESSION_DELETE_TIMEOUT || '60s';
const timeout = process.env.SESSION_TIMEOUT || '120s';

console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

const args = `-service-startup-timeout ${startupTimeout} -session-attempt-timeout ${attemptTimeout} -session-delete-timeout ${deleteTimeout} -timeout ${timeout}`
console.log(args);
execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start --args "${args}"`)

console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);