This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

When developing:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Docker Support

First install Docker and Docker Compose according to the [official documentation](https://docs.docker.com/get-docker/).

Then, build the Docker image:


```bash
docker-compose build
```

And run the Docker container:

```bash
docker-compose up
```

these have to be run when in the root directory of the project.


## env.variables in development
to run the project in development mode, you need to create a `.env` file in the root directory of the project and add variables from the `.env.example` file.

link to the `.env.example` file: [`.env.example`](./.env.example)

You can get these variables from the supabase project under project overwiew tab from the top of the screen `connect` and selecting app framework `Next.js` and then copying the variables from the `.env.example` file.
additionaly the service role key can be found from settings -> Data API -> Service Role -> Copy the key.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
