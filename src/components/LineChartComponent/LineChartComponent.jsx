import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './LineChartComponent.css'

const LineChartComponent = (data) => {
  return (
    <div>
      <ResponsiveContainer width='70%' aspect={3}>
        <LineChart data={data.data} margin={32}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='pv' stroke='#4DB474' strokeWidth={2.5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartComponent
