# Jazle

JavaScript library guessing game, a Wordle clone.
A fork of [cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle).

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
npm install
npm run start
```

### To build/run docker container:

```bash
docker build -t jazle .
docker run -d -p 3000:3000 jazle
```

Open http://localhost:3000 in your browser.
