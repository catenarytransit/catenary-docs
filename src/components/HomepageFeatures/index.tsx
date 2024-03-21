import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  src: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'New Contributor Guide',
    src: '/docs/guide',
    Svg: require('@site/static/img/section-guide.svg').default
  },
  {
    title: 'Skill Learning Center',
    src: '/docs/learning',
    Svg: require('@site/static/img/section-learning.svg').default
  },
  {
    title: 'Project Documentation',
    src: '/docs/catenary',
    Svg: require('@site/static/img/section-docs.svg').default
  },
  {
    title: 'Developer Blog',
    src: '/blog',
    Svg: require('@site/static/img/section-blog.svg').default
  }
];

function Feature({title, src, Svg}: FeatureItem) {
  return (
    <Link href={src} className={styles.feature}>
      <Svg className={styles.featureSvg} role="img" />
      {title}
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
