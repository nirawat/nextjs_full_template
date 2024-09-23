import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart } from 'src/components/chart';

import { useSignalRContext } from 'src/utils/signalr/signalr-context';

// ----------------------------------------------------------------------

export function AnalyticsConversionRateResize({ title, subheader, chart, ...other }) {
  const theme = useTheme();

  // SignalR Message ----------------------------
  const { user, message } = useSignalRContext();
  const [ isMessage, setIsMessage] = useState(false);
  const messageId = 'Code A';

  useEffect(() => {
    if(user) {
      if(user === messageId) {
        console.log('message: ', message);
        setIsMessage(true);
      }
    }
  }, [user]);
  // --------------------------------------------


  const chartColors = chart.colors ?? [
    theme.palette.primary.dark,
    hexAlpha(theme.palette.primary.dark, 0.24),
  ];

  const chartOptions = useChart({
    colors: chartColors,
    stroke: { width: 2, colors: ['transparent'] },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => fNumber(value),
        title: { formatter: (seriesName) => `${seriesName}: ` },
      },
    },
    xaxis: { categories: chart.categories },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: { fontSize: '10px', colors: ['#FFFFFF', theme.palette.text.primary] },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 2,
        barHeight: '48%',
        dataLabels: { position: 'top' },
      },
    },
    ...chart.options,
  });

  return (
    <Card sx={{ with: '100%', minWidth: 300, height: '100%' }} {...other}>
      <CardHeader title={title} subheader={subheader + (isMessage === true ? message.name : '')} />
      <Chart
        type="bar"
        series={chart.series}
        options={chartOptions}
        loadingProps={{ sx: { p: 2.5 } }}
        sx={{ py: 2.5, pl: 1, pr: 2.5 }}
      />
    </Card>
  );
}
