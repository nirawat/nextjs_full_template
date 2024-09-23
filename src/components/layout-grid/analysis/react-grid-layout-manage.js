import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import {
  _analyticTasks,
  _analyticPosts,
  _analyticTraffic,
  _analyticOrderTimeline,
} from 'src/_mock';

import "./grid-layout-styles.css";

import { DashboardAnalysisRenderCard } from "src/sections/overview/layout-grid/analysis/overview-render-card";

const ResponsiveReactGridLayout = WidthProvider(RGL);

let idCounter = 0;
let idCodeCounter = '';

const getId = (code) => {
  idCounter++;
  idCodeCounter =idCounter.toString()+':'+code;
  return idCodeCounter.toString();
};

const ReactGridLayoutManage = () => {
  // useState to manage layout
  const [layout, setLayout] = useState([]);

  console.log('layout: ', layout);

  // addNewItem function
  const addNewItem = (code, height) => {
    const newItem = { x: 0, y: 0, w: 3, h: height, i: getId(code) };
    if (layout.some((item) => item.x === 0 && item.y === 0)) {
      setLayout(
        layout
          .map((item) => {
            if (item.x === 0) {
              return { ...item, y: item.y + 1 }; // Correctly increment y
            }
            return item;
          })
          .concat([newItem])
      );
    } else {
      setLayout([...layout, newItem]); // Add new item to layout
    }
  };

  // onDrop event handler
  const onDrop = (layout, layoutItem, _event) => {
    const newItem = {
      i: `new-${items.length + 1}`,
      x: layoutItem.x,
      y: layoutItem.y,
      w: 2,
      h: 2,
    };
    setLayout([...layout, null]);
  };

  // onSieze change event handler
  const onSizeChange = (layout, newLayout, _event) => {
    setLayout([...layout, newLayout]);
  };

  // onSieze change event handler
  const onSaveChange = (layout, _event) => {
    
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button onClick={() => addNewItem('A', 10)}>Add Weekly Sales</Button>
        <Button onClick={() => addNewItem('B', 10)}>Add New Users</Button>
        <Button onClick={() => addNewItem('C', 10)}>Add Purchase Orders</Button>
        <Button onClick={() => addNewItem('D', 20)}>Add Current Visits</Button>
        <Button onClick={() => addNewItem('E', 20)}>Add Conversion Rate</Button>
      </Stack>
      <ResponsiveReactGridLayout
        isDraggable={true}
        isDroppable={true}
        isResizable={true}
        preventCollision={false}
        cols={12}
        items={5}
        rowHeight={10}
        onDrop={onDrop}
        onLayoutChange={(newLayout) => setLayout(newLayout)} // Handle layout change
      >
        {layout.map((item) => (
          <div key={item.i} data-grid={item}>
            <DashboardAnalysisRenderCard idx={item.i}/>
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </>
  );
};

export default ReactGridLayoutManage;
