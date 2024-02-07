This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Features

- A note input field that allows for plaintext input
- The notes have the following properties:
    - Timestamp
    - User that created it
    - Type (Message/Phone/Coffee/Beer/Meeting Note)
- There should be an activity feed that lists all of the notes in chronological order
    - It should display:
        - User that wrote the note
        - Relative Timestamp
        - The note
    - It should have the following actions:
        - Delete
- A good project is sufficiently covered by unit tests

## Implementation notes

- Write regular code with everything you would use at work
- Expected duration is 50 mins - 2 hours
- The current user (You) and the contact (Milton Romaguera) can be passed as properties that are hardcoded at the upper layer
- Do not write any backend, store data as a local state
- Focus more on code structure rather than being pixel perfect
- Use TypeScript and React.
- Anything that can be found on npmjs.com is allowed
- Typing a new note or submitting it shall not cause rerenders of other elements

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
