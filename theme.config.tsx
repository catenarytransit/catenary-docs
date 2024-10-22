import type { DocsThemeConfig } from 'nextra-theme-docs'
import { Link, useConfig } from 'nextra-theme-docs'
import Footer from "./components/Footer";

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/catenarytransit'
  },
  chat: {
    link: 'https://discord.gg/yVV6dguwtq'
  },
  footer: {
    component: <Footer />
  },
  primaryHue: 34,
  primarySaturation: 95,
  docsRepositoryBase: 'https://github.com/catenarytransit/catenary-docs/tree/main/',
  
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Catenary Docs'
    }
  },
  logo: <>
    <Link href='https://catenarymaps.org'><img src="/c-logo.svg" alt="Catenary logo" className='h-[35px] inline pr-2' /></Link>
    <span className='text-2xl mr-3 ml-1 cursor-default'>//</span>
    <Link href='/'>
      <img src="/logo.svg" alt="Catenary Docs logo" className='h-[35px] hidden lg:inline mr-2' />
      <img src="/icon.svg" alt="Catenary Docs logo" className='h-[35px] lg:hidden mr-2' />
    </Link>
  </>,
  logoLink: false,
  // banner: {
  //   key: 'docs-alpha',
  //   dismissible: false,
  //   text: (
  //     <>⚠️ This is a <b>very early alpha</b> and contains no real content!</>  
  //   )
  // },
  sidebar: {
    titleComponent({ title, type }) {
      if (title.startsWith('Get ')) {
        return <>
        <span className='border rounded-md px-1 font-medium mr-2 dark:text-white'>GET</span> {title.replace('Get ', '').trim()}</>
      }
      return title
    },
  },
  head: function useHead() {
    const { title } = useConfig()

    return (
      <>
        <meta name="msapplication-TileColor" content="#42a7c5" />
        <meta name="theme-color" content="#42a7c5" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Catenary helps connect people and communities with powerful transit data and algorithms."
        />
        <meta
          name="og:description"
          content="Catenary helps connect people and communities with powerful transit data and algorithms."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og.jpeg" />
        <meta name="twitter:site:domain" content="catenarymaps.org" />
        <meta name="twitter:url" content="https://catenarymaps.org" />
        <meta name="og:title" content={title ? title + ' – Catenary Docs' : 'Catenary Docs'} />
        <meta name="og:image" content="/og.jpeg" />
        <meta name="apple-mobile-web-app-title" content="Catenary" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  darkMode: true,
  toc: {
    backToTop: true
  },
}

export default config
