/*
 * @Author: codingfly
 * @Description: 
 * @Date: 2022-11-20 09:11:48
 * @LastEditTime: 2022-11-22 09:38:25
 * @FilePath: \my-website\src\components\HomepageFeatures\index.js
 */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '7x24h五星售后服务',
    Svg: require('@site/static/img/hour.svg').default,
    description: (
      <>
        遇到问题，随时为您提供优质解决方案。
      </>
    ),
  },
  {
    title: '版本升级无忧',
    Svg: require('@site/static/img/updated.svg').default,
    description: (
      <>
        跟随各大平台SDK，及时更新版本。
      </>
    ),
  },
  {
    title: '智能化提速',
    Svg: require('@site/static/img/world.svg').default,
    description: (
      <>
        使用全球代理CDN，解决访问慢的问题。
      </>
    ),
    
  },
];
const SecondList = [
  {
    title: '操作简易化',
    Svg: require('@site/static/img/typewriter.svg').default,
    description: (
      <>
        傻瓜式操作，即使小白也能掌握。
      </>
    ),
  },
  {
    title: '专业的技术提供质量保证',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        使用行业内最新技术，解决陈旧技术BUG。
      </>
    ),
  }
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4 ')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent:'center'}}>
          {SecondList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
