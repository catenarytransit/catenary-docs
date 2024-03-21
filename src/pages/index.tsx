import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div>
      <h1 className={styles.heroHeader}>Welcome to the Catenary Docs! 👋 🚊 🚍</h1>
      <h2 className={styles.heroSubheader}>The Catenary Docs hub is a resource for technical information related to Catenary projects.</h2>
      <HomepageFeatures />
      </div>
    </header>
    </Layout>
  );
}
