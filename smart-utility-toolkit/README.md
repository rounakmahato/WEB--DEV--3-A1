# Smart Utility Toolkit

A hands-on Node.js lab project built entirely with **core modules**
(`process`, `http`, `fs`, `crypto`) — no external packages or frameworks.

## Project Structure

```
smart-utility-toolkit/
├── calculator.js       # CLI calculator (process.argv)
├── app.js               # Demonstrates custom module reuse
├── server.js             # HTTP server with routing (http)
├── fileManager.js       # CRUD file operations (fs)
├── dice.js               # Secure random dice roller (crypto)
├── modules/
│   ├── isEven.js         # Custom module: checks even/odd
│   └── logger.js         # Custom module: timestamped logging
└── README.md
```

## 1. CLI Calculator

```bash
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
node calculator.js divide 10 0     # handled gracefully
node calculator.js foo 1 2         # invalid operation, handled gracefully
```

## 2. Custom Modules (isEven & logger)

`app.js` shows how `modules/isEven.js` and `modules/logger.js` are
exported with `module.exports` and reused elsewhere with `require()`.

```bash
node app.js
```

## 3. HTTP Server

```bash
node server.js
```

Then visit (browser or Postman):

| Route      | Response            |
|------------|----------------------|
| `/`        | Welcome message      |
| `/about`   | About page            |
| `/contact` | Contact page          |
| anything else | 404 error message |

## 4. File Manager (fs CRUD)

```bash
node fileManager.js
```

Creates, reads, updates, reads again, deletes `test.txt`, then attempts
to read the deleted file to demonstrate graceful error handling.

## 5. Dice Generator (crypto)

```bash
node dice.js        # single roll
node dice.js 5      # roll 5 times, shows total & average
```

Uses `crypto.randomInt()` for cryptographically secure randomness
instead of `Math.random()`.

## Requirements

- Node.js installed (no `npm install` needed — zero dependencies)
- Run each file individually with `node <filename>.js`

## Learning Objectives Covered

- `process.argv` for CLI input handling
- `module.exports` / `require()` for custom, reusable modules
- `http.createServer()` and basic routing
- `fs` module CRUD operations (`writeFile`, `readFile`, `appendFile`, `unlink`)
- `crypto.randomInt()` for secure randomness
- Graceful error handling throughout
