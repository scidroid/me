<div align="center">

# Juan Almanza's Website

**_My home in the internet_**

</div>

<div align="center">

![](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen.svg)

</div>

<div align="center">

![Website Preview](https://raw.githubusercontent.com/scidroid/me/main/public/screenshot.png)

</div>

This is the source code for my personal website. It is built using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).

Also, I use [Vercel](https://vercel.com/) to deploy the website and [Sanity](https://www.sanity.io/) to manage the content.

In the `/card` directory, you can find the source code for my bussiness card. If you want to try it you can just run `npx scidroid` in your terminal.

## Features

- [] (WIP) iCloud like design
- [x] About me
- [x] Projects
- [x] Blog
- [x] Contact
- [x] Comments
- [x] CMS Integration
- [x] Now Playing
- [x] Thought of the day
- [x] Open Graph Image generation
- [x] PWA
- [x] Contact backend with a database and email service. Built using react-email.
- [x] Analytics
- [] RSS Feed
- [] Sitemap
- [] Live health data
- [] Terminal easter egg

For information about the bussiness card, check the README.md file in the `/card` directory.

## Getting Started

First do you need to add the environment variables. You can do this by creating a `.env.local` file in the root directory. You can use the `.env.example` file as a template.

You need 5 environment variables:

- `DATABASE_URL` is the URL of the database where the contact form data will be stored. You must use a PostgreSQL database. This is needed for the contact form and in-site analytics.
- `MAILGUN_API_KEY` is the API key of your Mailgun account. This is needed for the contact form.
- `SPOTIFY_CLIENT_ID` is the client ID of your Spotify app. This is needed for the Now Playing section.
- `SPOTIFY_CLIENT_SECRET` is the client secret of your Spotify app. This is needed for the Now Playing section.
- `SANITY_WRITE_TOKEN` is the write token of your Sanity project. This is needed for the CMS integration.

Then, install the dependencies:

```bash
yarn
```

Finally, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Production

To build the website for production, run:

```bash
yarn build
```

Then, to start the production server, run:

```bash
yarn start
```

This repository has a deployment configuration for Vercel. So to deploy the website, just push the changes to the `main` branch.

But, if you want to deploy the website in another platform, you need to add the environment variables to the production server and just run the `yarn build` and `yarn start` commands.

If you want to deploy it in Vercel, you can just run `vercel` in the root directory and follow the instructions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)
- [Sanity](https://www.sanity.io/)
- [react-email](https://react.email/)

## Contact

If you want to contact me you can reach me at [hi@scidroid.co](mailto:hi@scidroid.co).
