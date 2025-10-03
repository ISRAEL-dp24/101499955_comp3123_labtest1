const fs = require('fs'); const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logDir)){
    fs.readdirSync(logDir).forEach(file => {
        console.log(`delete files...: ${file}`);
        fs.unlinkSync(path.join(logDir, file));
    });
    fs.rmdirSync(logDir);
}else{
    console.log("no logs directory");
}
