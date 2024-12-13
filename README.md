# Unexpected Server Crash in Node.js

This repository demonstrates a common error in Node.js applications: unexpected server crashes due to unhandled exceptions or improper error handling. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version with robust error handling.

## Problem

The server in `bug.js` uses `process.exit(1)` to simulate a crash. In a real-world scenario, this could happen due to uncaught exceptions, memory leaks, or other issues.  The immediate termination of the process prevents graceful shutdown and error logging. 

## Solution

The `bugSolution.js` demonstrates improved error handling.  It uses a `try...catch` block to catch potential errors, logs them to the console, and allows the server to continue running or gracefully shut down.