import React from 'react'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
export default function DonutChart() {

    const data = [
        { argument:'Repairs', value:10 },
        { argument:'Windows', value:70 },
        { argument:'MacOS', value:20 },
      ];
  return (
    <div>
        <Paper>
            <Chart
                data={data}
            >
                <PieSeries
                    valueField="value"
                    argumentField="argument"
                />
                <Title  text="Weekly Sales" />
            </Chart>
        </Paper>
    </div>
  )
}
