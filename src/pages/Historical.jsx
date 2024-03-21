import React, { useRef } from 'react'
import LineChartComponent from '../components/LineChartComponent/LineChartComponent'
import '../stylessheet/Historical.css'

const Historical = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  const humidity = useRef(null)
  const floorHumidity = useRef(null)
  const temperature = useRef(null)
  const coTwo = useRef(null)

  const scrollToHumidity = () => {
    humidity.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFloorHumidity = () => {
    floorHumidity.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTemperature = () => {
    temperature.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCoTwo = () => {
    coTwo.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <div className='title'>
        <h1>Historical</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', margin: 19 }}>
        <button className='historicalButton' onClick={scrollToHumidity}>
          Humidity
        </button>
        <button className='historicalButton' onClick={scrollToFloorHumidity}>
          Floor Humidity
        </button>
        <button className='historicalButton' onClick={scrollToTemperature}>
          Temperature
        </button>
        <button className='historicalButton' onClick={scrollToCoTwo}>
          Co2
        </button>
      </div>
      <div style={{ height: 'auto', marginBottom: 86 }} ref={humidity}>
        <div className='subheader-container'>
          <h2>Humidity</h2>
        </div>
        <LineChartComponent data={data} />
      </div>
      <div style={{ height: 'auto', marginBottom: 86 }} ref={floorHumidity}>
        <div className='subheader-container'>
          <h2>Floor Humidity</h2>
        </div>
        <LineChartComponent data={data} />
      </div>
      <div style={{ height: 'auto', marginBottom: 86 }} ref={temperature}>
        <div className='subheader-container'>
          <h2>Temperature</h2>
        </div>
        <LineChartComponent data={data} />
      </div>
      <div style={{ height: 'auto', marginBottom: 86 }} ref={coTwo}>
        <div className='subheader-container'>
          <h2>Co2</h2>
        </div>
        <LineChartComponent data={data} />
      </div>
    </div>
  )
}

export default Historical
