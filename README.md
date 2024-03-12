## Make a file ```versel.json``` and paste all fetch request and their destinations

## Make Public as Static folder. Strictly follow the ```main.js``` code in this repo.

## In ```main.js```, in every GET request, set root to Public folder like this: 
```
res.sendFile('index.html', { root: path.join(__dirname, '../public') })
```

## In tailwind.config, add this line: 
```
content: ["./public/*.html"],
```

## Add this into package.json: 
```
"scripts": {
    "start": "concurrently \"npx tailwindcss -i ./public/src/input.css -o ./public/src/output.css --watch\" \"nodemon index.js\""
  },

"main": "./src/main.js",
```

