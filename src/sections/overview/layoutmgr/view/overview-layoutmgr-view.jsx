'use client';

import React, { useState } from "react";

import Box from '@mui/material/Box';
import { cardClasses } from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

export function OverviewLayoutMgrView() {



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
      hello!
    </DashboardContent>
  );
}
