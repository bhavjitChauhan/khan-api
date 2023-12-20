import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_fun_moments.svg').default,
    description: (
      <>
        The Khan API provides a simple and straightforward way to access Khan Academy data.
      </>
    ),
  },
  {
    title: 'Always Up-to-Date',
    Svg: require('@site/static/img/undraw_server_status.svg').default,
    description: (
      <>
        No need to worry about your app breaking. The <a href="https://github.com/bhavjitChauhan/khan-api/tree/safelist" target="_blank">Safelist</a> is automatically updated with the latest queries.
      </>
    ),
  },
  {
    title: 'Works Everywhere',
    Svg: require('@site/static/img/undraw_destinations.svg').default,
    description: (
      <>
        From Node.js to the browser, the Khan API works seemlessly. No need to worry about any CORS errors.
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
