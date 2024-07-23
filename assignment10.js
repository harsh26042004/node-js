
// 1. Simple HTTP server

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Students!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// 2. File reading and writing

const fs = require('fs');

const inputFile = 'input.txt';
const outputFile = 'output.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile(outputFile, data, err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`File copied from ${inputFile} to ${outputFile}`);
  });
});

// 3. HTTP server with routing

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// 4. OS module

const os = require('os');

console.log('Operating system:', os.type());
console.log('Architecture:', os.arch());
console.log('CPU cores:', os.cpus().length);
console.log('Free memory:', os.freemem());
console.log('Total memory:', os.totalmem());

// 5. Path module

const path = require('path');

const currentDir = path.dirname(__filename);
console.log('Current directory:', currentDir);

const filename = 'myfile.txt';
const fullPath = path.join(currentDir, filename);
console.log('Full path:', fullPath);

const ext = path.extname(filename);
console.log('Extension:', ext);

const basename = path.basename(fullPath);
console.log('Basename:', basename);
// 6. Command-line calculator

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter first number: ', (num1) => {
  readline.question('Enter second number: ', (num2) => {
    readline.question('Enter operation (+, -, *, /): ', (operator) => {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          console.log('Invalid operator!');
          readline.close();
          return;
      }
      console.log(`Result: ${result}`);
      readline.close();
    });
  });
});

