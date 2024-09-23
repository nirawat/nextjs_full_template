'use client';

import React from "react";

import { CONFIG } from 'src/config-global';
// import { AnalyticsNews } from '.src/sections/overview/analytics/analytics-news';
// import { AnalyticsTasks } from 'src/sections/overview/analytics/analytics-tasks';
import { AnalyticsCurrentVisits } from 'src/sections/overview/analytics/analytics-current-visits';
// import { AnalyticsOrderTimeline } from 'src/sections/overview/analytics/analytics-order-timeline';
import { AnalyticsWebsiteVisits } from 'src/sections/overview/analytics/analytics-website-visits';
import { AnalyticsWidgetSummary } from 'src/sections/overview/analytics/analytics-widget-summary';
// import { AnalyticsTrafficBySite } from 'src/sections/overview/analytics/analytics-traffic-by-site';
// import { AnalyticsCurrentSubject } from 'src/sections/overview/analytics/analytics-current-subject';
import { AnalyticsConversionRateResize } from 'src/sections/overview/analytics/analytics-conversion-rate-resize';

export const DashboardAnalysisRenderCard = ({ idx }) => {
  const idCode = idx.split(':');
  const renderContent = () => {
    switch(idCode[1]) {
      case "A":
        return <AnalyticsWidgetSummary
        title="Weekly sales"
        percent={2.6}
        total={714000}
        icon={
          <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-bag.svg`} />
        }
        chart={{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          series: [22, 8, 35, 50, 82, 84, 77, 12],
        }}
      />
      case "B":
        return <AnalyticsWidgetSummary
          title="New users"
          percent={-0.1}
          total={1352831}
          color="secondary"
          icon={
            <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-users.svg`} />
          }
          chart={{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            series: [56, 47, 40, 62, 73, 30, 23, 54],
          }}
        />
      case "C":
        return <AnalyticsWidgetSummary
          title="Purchase orders"
          percent={2.8}
          total={1723315}
          color="warning"
          icon={
            <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-buy.svg`} />
          }
          chart={{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            series: [40, 70, 50, 28, 70, 75, 7, 64],
          }}
        />
      case "D":
        return <AnalyticsCurrentVisits
          title="Current visits"
          chart={{
            series: [
              { label: 'America', value: 3500 },
              { label: 'Asia', value: 2500 },
              { label: 'Europe', value: 1500 },
              { label: 'Africa', value: 500 },
            ],
          }}
        />
      case "E":
        return <AnalyticsConversionRateResize
                title="Conversion rates"
                subheader="(+43%) than last year"
                chart={{
                  categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
                  series: [
                    { name: '2022', data: [44, 55, 41, 64, 22] },
                    { name: '2023', data: [53, 32, 33, 52, 13] },
                  ],
                }}
              />;
      default:
        return <></>;
    }
  }

  return <>{renderContent()}</>;
}
