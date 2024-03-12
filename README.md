Setup Instructions
==================

### 1\. Create `vercel.json`

Make a file `vercel.json` and paste all fetch requests along with their destinations.

### 2\. Set Public as Static folder

Ensure that `Public` is set as the static folder. Strictly follow the code in `main.js` provided in this repo.

### 3\. Update GET Requests in `main.js`

In every GET request in `main.js`, set root to Public folder like this:


`res.sendFile('index.html', { root: path.join(__dirname, '../public') })`

### 4\. Update `tailwind.config`

Add this line to `tailwind.config`:

`content: ["./public/*.html"]`

### 5\. Add into `package.json`

Add these scripts and main file:


`"scripts": {
    "start": "concurrently \"npx tailwindcss -i ./public/src/input.css -o ./public/src/output.css --watch\" \"nodemon index.js\""
},
"main": "./src/main.js"`
