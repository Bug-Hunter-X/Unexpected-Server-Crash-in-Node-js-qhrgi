const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Your server logic here
    // Simulate an error
    // const result = 1 / 0; // Uncomment to trigger an error
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Server Error:', error);
    // Implement graceful shutdown or other error handling measures here
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//For demonstration, uncomment the line that causes an error inside the try block to see the effect of the improved error handling.