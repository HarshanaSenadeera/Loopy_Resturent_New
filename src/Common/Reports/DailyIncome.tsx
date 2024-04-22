import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export interface DailyIncomeProps {
  diff?: number;
  trend: 'up' | 'down';
  sx?: SxProps;
  value: string;
}

export function DailyIncome({ diff, trend, sx, value }: DailyIncomeProps): React.JSX.Element {
  const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
  const trendColor = trend === 'up' ? '#4caf50' : '#f44336'; // Green for up, Red for down

  return (
      <Card sx={sx} elevation={4} style={{ borderRadius: 16 }}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
              <Stack spacing={1}>
                <Typography color="text.primary" variant="overline">
                  Daily Income
                </Typography>
                <Typography variant="h4" style={{ color: '#333' }}>{value}</Typography> {/* Dark text color */}
              </Stack>
              <Avatar sx={{ backgroundColor: '#de1010', height: '56px', width: '56px' }}> {/* Blue background color */}
                <CurrencyExchangeIcon/>
              </Avatar>
            </Stack>
            {diff ? (
                <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                  <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
                    <TrendIcon color={trendColor} fontSize="var(--icon-fontSize-md)" />
                    <Typography color={trendColor} variant="body2">
                      {diff}%
                    </Typography>
                  </Stack>
                  <Typography color="text.secondary" variant="caption">
                    Since last month
                  </Typography>
                </Stack>
            ) : null}
          </Stack>
        </CardContent>
      </Card>
  );
}
