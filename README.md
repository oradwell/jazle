# Jazle

JavaScript library guessing game, a Wordle clone.
A fork of [cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle).

See the list of accepted libraries: [wordlist.ts](src/constants/wordlist.ts)

## Build and run

### Run locally

Clone the repository and perform the following command line actions:

```bash
npm install
npm run start
```

### Docker

#### Local

For local builds use the following commands:

```bash
docker build . -t jazle
docker run -p 3000:3000 jazle
```

Open http://localhost:3000 in your browser.

#### Production

Production builds run on nginx

```bash
docker build . --target prod -t jazle
docker run -p 3000:80 jazle
```
