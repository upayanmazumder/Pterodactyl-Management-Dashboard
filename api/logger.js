// api/logger.js

const fs = require('fs');
const path = require('path');

// Function to format log messages with timestamp
function formatLogMessage(level, message) {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
}

// Function to log messages to file and console
function log(level, message) {
  const formattedMessage = formatLogMessage(level, message);

  // Log to console
  console.log(formattedMessage);

  // Log to file
  const logDirectory = path.join(__dirname, 'logs');
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD format
  const logFilePath = path.join(logDirectory, `${today}.log`);

  // Ensure log directory exists
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  // Append to log file
  fs.appendFileSync(logFilePath, `${formattedMessage}\n`);
}

// Logger levels
module.exports.info = (message) => log('info', message);
module.exports.warn = (message) => log('warn', message);
module.exports.error = (message) => log('error', message);
