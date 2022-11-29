import React, { useEffect } from 'react';
import './Converter.css';


function Converter() {

  const [value, setValue] = React.useState('');
  const [scale, setScaleValue] = React.useState('');
  const [celsius, setCelsius] = React.useState(0);
  const [kelvin, setKelvin] = React.useState(273.15)

  const handleValue = event => {
    setValue(event.target.value);
  }
  const handleScale = event => {
    setScaleValue(event.target.value);
  }


  useEffect(() => {
    const parsedValue = parseInt(value);

    switch (scale) {
      case 'Celsius':
        setCelsius(parsedValue)
        setKelvin(Math.round(parsedValue + 273.15))
        break;

      case 'Kelvin':
        setKelvin(parsedValue)
        setCelsius(Math.round(parsedValue - 273.15))
        break;

      default:
        setScaleValue('Scale Selection')
        break;
    }
  }, [value, scale])

  return (
    <>
      <form className='main-form'>
        <label className='value-label'>
          <input
            className='value-to-convert'
            placeholder='Enter Value:'
            onChange={handleValue}
            value={value}
          >
          </input>
        </label>

        <label className='scale-label'>
          <select
            className='scale-select'
            onChange={handleScale}
            value={scale}
          >
            <option value="">Scale Selection</option>
            <option value='Celsius'>Celsius</option>
            <option value='Kelvin'>Kelvin</option>
          </select>
        </label>
      </form>

      <hr className='line'></hr>

      <section className='results-container'>
        <h1 className='result-title'>Result:</h1>
        <div className='results'>
          <p>Celsuis: {celsius}</p>
          <p>Kelvin: {kelvin}</p>
        </div>
      </section>
    </>
  )

}

export { Converter };