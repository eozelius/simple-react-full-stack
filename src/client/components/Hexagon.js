/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from '../styles/Hexagon.scss';

const Hexagon = () => (
  <React.Fragment>
    <a className={style.hex}>
      <div className={style.wrapper}>
        <div className={`${style.hexagon} ${style.color1}`} />
      </div>
      <span className={style.content}>
        <strong>Hello!</strong>
        <small>i&#39;m a hexagon</small>
      </span>
    </a>
  </React.Fragment>
);

export default Hexagon;
