import React from 'react';

export default function LastBlank({ radioTypeValue, setRadioTypeValue, options, setOptions }) {
  const handleOnChange = e => {
    setRadioTypeValue(e.target.value);
  };

  const optionChangeHandler = e => {
    setOptions(e.target.value);
  };

  return (
    <div className='RadioTypeCon'>
      <div className='inlineCon'>
        <h5>Choose your favorite Web language:</h5>
        <form className='RadioTypeInput'>
          <input
            type='radio'
            id='html'
            name='fav_language'
            value='HTML'
            checked={radioTypeValue === 'HTML'}
            onChange={handleOnChange}
          />

          <label className='label' for='html'>
            HTML
          </label>

          <input
            type='radio'
            id='css'
            name='fav_language'
            value='CSS'
            checked={radioTypeValue === 'CSS'}
            onChange={handleOnChange}
          />
          <label className='label' for='css'>
            CSS
          </label>

          <input
            type='radio'
            id='javascript'
            name='fav_language'
            value='JavaScript'
            checked={radioTypeValue === 'JavaScript'}
            onChange={handleOnChange}
          />
          <label className='label' for='javascript'>
            JavaScript
          </label>
        </form>

        <div className='select'>
          <label for='cars'>Choose a car:</label>
          <select
            value={options}
            onChange={optionChangeHandler}
            id='cars'
            name='carlist'
            form='carform'>
            <option checked={options === 'volvo'} value='volvo'>
              Volvo
            </option>
            <option checked={options === 'mersedes'} value='mersedes'>
              Mersedes
            </option>
            <option checked={options === 'opel'} value='opel'>
              Opel
            </option>
            <option checked={options === 'audi'} value='audi'>
              Audi
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
