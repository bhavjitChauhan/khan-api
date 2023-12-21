import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_fun_moments.svg').default,
    description: (
      <>
        The Khan API library provides a simple and straightforward way to access Khan Academy data.
      </>
    ),
  },
  {
    title: 'Always Up-to-Date',
    Svg: require('@site/static/img/undraw_server_status.svg').default,
    description: (
      <>
        No need to worry about your app breaking because Khan updated their API. Learn more about the <a href="https://khan-api.bhavjit.com/docs/safelist">Safelist</a>.
      </>
    ),
  },
  {
    title: 'Works Everywhere',
    Svg: require('@site/static/img/undraw_destinations.svg').default,
    description: (
      <>
        From Node.js to the browser, the Khan API library works seemlessly. Learn more about the <a href="https://khan-api.bhavjit.com/docs/proxy">Proxy</a>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
