This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Setting up database with Prisma 
```
npm install prisma
npx prisma init --datasource-provider sqlite
```

It will generate schema file like this
![image](https://github.com/kausar128/discuss-next/assets/41689458/3d785d55-c908-4e63-8754-cb2e51cc4d38)

Take the content of schema file provided in this GitHub repo and replace in your generated file.
Next up, initialize it using 
```
npx prisma migrate dev
```
![image](https://github.com/kausar128/discuss-next/assets/41689458/d5509515-1621-46d2-915d-9e639d2dee24)

See the new files generated here for db

![image](https://github.com/kausar128/discuss-next/assets/41689458/8581f71e-4469-43ff-825f-96f1c79a3f2f)

It is ready to use now, we have exported db from this file in this project:
![image](https://github.com/kausar128/discuss-next/assets/41689458/85190552-cecf-47e6-84bd-342aeeb401db)






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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## General idea of the app:
![Screenshot from 2024-07-07 23-09-06](https://github.com/kausar128/discuss-next/assets/41689458/6c2b33fb-401c-4835-98a1-5bb2c04e736a)

## using nextAuth and preparing signIn and signOut functionalities
![Screenshot from 2024-07-07 20-17-06](https://github.com/kausar128/discuss-next/assets/41689458/333072a0-19f8-41ac-830a-ca4f4019bd8f)

## Routing
![Screenshot from 2024-07-07 23-12-26](https://github.com/kausar128/discuss-next/assets/41689458/47fb8e87-ba8e-483a-adba-681c95c803d6)

## Path helpers to make it easy to edit the paths at one place if folder structure changes 
![Screenshot from 2024-07-07 23-38-28](https://github.com/kausar128/discuss-next/assets/41689458/7b99b15a-5d84-42ec-8e7c-54dee43248fb)

## QueryStrings / search parameters in URLS

![Screenshot from 2024-07-14 22-42-24](https://github.com/user-attachments/assets/59d2fcbd-4c30-42c3-88cc-dc8ed7b04c0d)

![Screenshot from 2024-07-14 22-43-35](https://github.com/user-attachments/assets/d2f632b2-b4db-4c42-be02-33db02812b22)




