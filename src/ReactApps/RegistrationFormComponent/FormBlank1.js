import React, { useState, useRef, useEffect } from 'react';

export default function FormBlank1({
  setInputValue,
  inputValue,
  setInputValue1,
  inputValue1,
  setInputValue2,
  inputValue2,
  validText,
}) {




  return (
    <div className='Blank1'>
      <label for='name'>
        <strong>Name</strong>
      </label>
      <input
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        className='input'
        type='text'
        placeholder='Enter Name'
        name='name'
        id='name'
      />
      <div style={{color: 'red'}}> {validText} </div>

      <label for='surname'>
        <strong>Surname</strong>
      </label>
      <input
        onChange={k => setInputValue1(k.target.value)}
        value={inputValue1}
        className='input'
        type='text'
        placeholder='Surname Name'
        name='surname'
        id='surname'
      />

      <label for='city'>
        <strong>City</strong>
      </label>
      <input
        onChange={a => setInputValue2(a.target.value)}
        value={inputValue2}
        className='input'
        type='text'
        placeholder='City Name'
        name='city'
        id='city'
      />
    </div>
  );
}
