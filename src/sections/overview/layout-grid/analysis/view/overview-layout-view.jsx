'use client';

import React from "react";

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

import ReactGridLayoutView from "src/components/layout-grid/analysis/react-grid-layout-view"; // Adjust the path as needed

export function OverviewLayoutView() {

  return (
    <DashboardContent
      maxWidth={false}
      disablePadding
      sx={{
        borderTop: (theme) => ({
          lg: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        }),
      }}
    >
      <ReactGridLayoutView />
    </DashboardContent>
  );
}
