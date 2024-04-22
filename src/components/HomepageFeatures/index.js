import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '立命之学',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      人的命运是可靠自己创造，而不是被命数所束缚
      </>
    ),
  },
  {
    title: ' 改过之法',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      从小的过失及时改过，那自然便不会犯下大的过错
      </>
    ),
  },
  {
    title: '积善之方',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      多做善事帮助别人，善事积多了，命运自然也有所改变
      </>
    ),
  },
  {
    title: '谦德之效',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      举头三尺，决有神明；趋吉避凶，断然由我
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
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
