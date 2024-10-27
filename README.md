# Remix template with Typescript, Firebase Functions and Vite.

This template is based on the express template provided by Remix.
It has three template variants for the Firebase Functions building: `tsc`, `esbuild` and `rollup`. You can find them in their corresponding branches.

## Development

Run the dev server, with HMR for the Remix paths:

```sh
npm run dev
```

To run the server with the Firebase emulator:

```sh
npm run server
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then deploy the app to Firebase:

```sh
npm run deploy
```

You need to setup a Firebase account and a project before.

## Build variants

### tsc (main branch)

You have to add the `.js` extension to your imports which I don't like.

### esbuild (esbuild branch)

It is really fast (10ms) but the output contains `let` and `var` keywords. I don't know how to improve the output.

### rollup (rollup branch)

It generates the best output but it is slower than `esbuild` (3.7s).
