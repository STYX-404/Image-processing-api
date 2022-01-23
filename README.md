# IMAGE PROCESSING API PROJECT
This is an API that resizes images to the desired width and height made for udacity FWD course

## Requirments
- NodeJs
- Npm
- Express
- jasmine
- Sharp
- Supertest
- Nodemon
- Prettier
- Eslint
- TypeScript

## Installed scripts
```
  "scripts": {
    "test": "npx tsc && jasmine",
    "dev": "nodemon --exec npx ts-node src/index.ts",
    "build": "npx tsc",
    "prod": "npm run build && nodemon dist/index.js",
    "format": "prettier --write 'src/**/*.{ts,tsx,js,jsx}'",
    "lint": "eslint . --ext .ts"
  }
```

## To run scripts

```
npm run <script name>
```

### dev script
dev script is the script for development server, it runs the server from the typeScript directly

### prod script
prod script is the script for production server, it builds the code first then run the combiled code server


## Endpoint
This is the endpoint for processing the images.
You should go to : **localhost/api/images/filename=example&width=100&height=100**

**filename:** the name of the image you want to process(should exist in the 'assets/full' folder).
**width:** the desired width you want to convert the image to.
**height:** the desired height you want to convert the image to.