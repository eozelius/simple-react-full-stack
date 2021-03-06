/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import style from '../styles/LambdaMap.scss';
import Hexagon from './Hexagon';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lambdas: [
        {
          id: 1,
          status: 'running',
          dailyTraffic: 415,
          cpu: 70,
          lastActivity: 1541535768589
        },
        {
          id: 2,
          status: 'waiting',
          dailyTraffic: 108,
          cpu: 0,
          lastActivity: 1541535891937
        },
        {
          id: 3,
          status: 'waiting',
          dailyTraffic: 228,
          cpu: 0,
          lastActivity: 1541535999972
        },
        {
          id: 4,
          status: 'failing',
          dailyTraffic: 0,
          cpu: 0,
          lastActivity: 1541536039785
        },
        {
          id: 5,
          status: 'failing',
          dailyTraffic: 1176,
          cpu: 100,
          lastActivity: 1541536039785
        },
        {
          id: 6,
          status: 'running',
          dailyTraffic: 105,
          cpu: 15,
          lastActivity: 1541536134853
        },
        {
          id: 7,
          status: 'running',
          dailyTraffic: 687,
          cpu: 22,
          lastActivity: 1541536134853
        },
        {
          id: 8,
          status: 'running',
          dailyTraffic: 47,
          cpu: 3,
          lastActivity: 1541536190054
        },
        {
          id: 9,
          status: 'running',
          dailyTraffic: 187,
          cpu: 13,
          lastActivity: 1541536247045
        },
        {
          id: 10,
          status: 'waiting',
          dailyTraffic: 87,
          cpu: 0,
          lastActivity: 1541536276382
        }
      ]
    };
  }

  render() {
    // Be care editing this as it is already a nested loop.
    const fourteenTimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const lambdaFleet = fourteenTimes.map(x => (
      <div className={`hexes-${x} ${style.column}`} key={x}>
        {[1, 2, 3, 4, 5, 6].map(y => (
          <Hexagon key={y} />
        ))}
      </div>
    ));

    return (
      <div className={style.container}>
        <div className={style.honeycomb}>{lambdaFleet}</div>
      </div>
    );
  }
}
