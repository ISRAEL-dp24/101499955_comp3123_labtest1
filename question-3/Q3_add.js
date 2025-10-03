const fs = require('fs'); const path = require('path');
const logDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

process.chdir(logDir);
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `log file number ${i}`);

    console.log(`${fileName}`);
}
