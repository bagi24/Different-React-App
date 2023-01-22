import React from 'react';

export default function LastBlank(radioTypeValue, setRadioTypeValue) {
  const handleOnChange = e => {
    console.log(e.target.value);
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
            value='Html'
            checked={radioTypeValue === 'Html' ? handleOnChange : null}
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
            checked={radioTypeValue === 'CSS' ? handleOnChange : null}
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
            checked={radioTypeValue === 'JavaScript' ? handleOnChange : null}
            onChange={handleOnChange}
          />
          <label className='label' for='javascript'>
            JavaScript
          </label>
        </form>
      </div>
    </div>
  );
}
