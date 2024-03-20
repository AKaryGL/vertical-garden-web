import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './LineChartComponent.css'

const LineChartComponent = (data) => {
  return (
    <div>
      <LineChart width={952} height={385} data={data.data} margin={32}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='pv' stroke='#4DB474' />
      </LineChart>
    </div>
  )
}

export default LineChartComponent
