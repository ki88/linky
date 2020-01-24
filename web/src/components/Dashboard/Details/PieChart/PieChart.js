import React, {useEffect, useRef} from 'react';
import classNames from 'classnames';
import {Chart} from 'chart.js';
import {getColor} from '../../../../utils/getColor';
import s from './PieChart.module.scss';

export const PieChart = ({data, title}) => {
  const canvasRef = useRef();

  const configRef = useRef({
    type: 'pie',
    data: {
      datasets: [],
      labels: []
    },
    options: {
      responsive: true
    }
  });

  const chartRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, configRef.current);
  }, []);

  useEffect(() => {
    const keys = Object.keys(data);
    configRef.current.data = {
      datasets: [{
        data: keys.map(key => data[key]),
        backgroundColor: keys.map((key, index) => getColor(index, key)),
        label: ''
      }],
      labels: keys.map(key => `${key} - ${data[key]}`)
    };
    chartRef.current.update();
  }, [data]);

  const noData = !Object.keys(data).length;

  return (
    <div className={classNames(noData && s.noData)}>
      <div className={s.title}>{title}</div>
      <canvas ref={canvasRef} />
    </div>
  )
};
