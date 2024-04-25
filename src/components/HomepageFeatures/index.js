import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '立命之学',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      命由我作，福自己求
      </>
    ),
  },
  {
    title: ' 改过之法',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      过有千端，惟心所造；吾心不动，过安从生?
      </>
    ),
  },
  {
    title: '积善之方',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      爱鼠常留饭，怜蛾不点灯
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
//function Feature({Svg, title, description}) {

function Feature({title, description}) {
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
