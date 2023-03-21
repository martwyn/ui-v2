# Martwyn UI

This repo is the UI to the API/content DB provided via the repo https://github.com/martwyn/api-v2

It is a Next.js project written with the following technologies:
 - Typescript
 - Tailwind CSS
 - Jotai

At it's core the code here is fairly simple. It gives a text input for the search query to send to the API, along with a Jotai store that is used to change the personality of the assistant that responds to the query.

# Requirements

You'll want the API running, as per the instructions at https://github.com/martwyn/api-v2

Plus you'll want to `yarn install` or `npm install` to get the necessary modules.

## Environment variables

You'll need to setup the following three variables inside a `.env.local` file:

```
NEXT_PUBLIC_API_HOST="http://localhost:3001"
```

# Commands

This project uses the default nextjs scripts.

`yarn dev` for local development.

`yarn start` for production