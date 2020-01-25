import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { generateChartConfig } from './generateChartConfig';
import { generateData } from './generateData';

export const TimeChart = ({ data }) => {
  const canvasRef = useRef();

  const configRef = useRef(generateChartConfig());

  const chartRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, configRef.current);
  }, []);

  useEffect(() => {
    configRef.current.data.datasets[0].data = generateData(data);
    chartRef.current.update();
  }, [data]);

  return (
    <div style={{ height: 200, marginLeft: -25 }}>
      <canvas ref={canvasRef} />
    </div>
  );
};
