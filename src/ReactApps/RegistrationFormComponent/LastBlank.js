import React from 'react';

export default function LastBlank({ radioTypeValue, setRadioTypeValue }) {
  const handleOnChange = e => {
    setRadioTypeValue(e.target.value);
    console.log(radioTypeValue);
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
          <select id='cars' name='carlist' form='carform'>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='opel'>Opel</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
      </div>
    </div>
  );
}
