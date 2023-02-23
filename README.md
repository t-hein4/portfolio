## Introduction

As a developer, I understand the importance of having a portfolio that demonstrates my skills and abilities. That's why I created this website using Next.js and Sanity as the Headless CMS. With this platform, I am able to showcase my personal projects, skills and achievements, and apply for job opportunities.

Available at [t-hein.vercel.app](https://t-hein.vercel.app/)

## SSG: Building a Website that's Easy to Edit and Update

To make it easy to manage my website, I used SSG (Static Site Generation) to build it. That means that every time I edit or create a project, I would have to redeploy the website to get an updated version. However, to rebuild only the necessary parts of the website, I integrated Next.js's on-demand ISR (Incremental Static Regeneration) and Sanity's webhook. This way, all the new requests after I publish my project will receive the updated version and I no longer have to redeploy the website.

## Seamless Content Management with Sanity Studio

In order to make it easy to update my website, I embedded Sanity Studio. This is where I can update or create data into my portfolio website, meaning I can write on one side while previewing on the other side at the same time. It provides a seamless and easy way to manage my content and make updates to my website.

## Mobile Responsive Design

I also ensured that my website is mobile responsive. This means that it can be accessed easily on mobile devices and still look great, making it easier for visitors to access and view my portfolio.

## Easy-to-Use Template

Finally, my portfolio website can be converted into a blog website with a minimum configuration for those who wants to have a personal blog website but does not have coding experience. This makes it easier for others to create a portfolio website that is just as professional and visually appealing as mine.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Available scripts

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
