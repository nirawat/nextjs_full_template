import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import {
  _analyticTasks,
  _analyticPosts,
  _analyticTraffic,
  _analyticOrderTimeline,
} from 'src/_mock';

import "./grid-layout-styles.css";

import { DashboardAnalysisRenderCard } from "src/sections/overview/layout-grid/analysis/overview-render-card";

const ResponsiveReactGridLayout = WidthProvider(RGL);

const ReactGridLayoutView = () => {
  // useState to manage layout
  const [layout, setLayout] = useState([]);

  console.log('layout: ', layout);

  return (
    <React.Fragment>
      <ResponsiveReactGridLayout
        isDraggable={false}
        isDroppable={false}
        isResizable={false}
        preventCollision={false}
        cols={12}
        items={5}
        rowHeight={10}
      >
        {layout.map((item) => (
          <div key={item.i} data-grid={item}>
            <DashboardAnalysisRenderCard idx={item.i}/>
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </React.Fragment>
  );
};

export default ReactGridLayoutView;
