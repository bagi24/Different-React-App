import React from 'react';

export default function FormBlank2({
  checked,
  setChecked,
  checked1,
  setChecked1,
  phoneNum,
  setPhoneNum,
  setTextValue,
  textValue,
}) {
  const handleChange = () => {
    setChecked(!checked);
  };

  const handleChange1 = () => {
    setChecked1(!checked1);
  };

  return (
    <div className='Blank1'>
      <div className='question'>
        <h5> Whats your Gender? </h5>

        <label>
          Famale
          <input type='checkbox' checked={checked} onChange={handleChange} />
          {checked.toString()}
        </label>

        <label>
          Male
          <input type='checkbox' checked={checked1} onChange={handleChange1} />
          {checked1.toString()}
        </label>
      </div>

      <div className='question'>
        <label>
          <strong> Phone :</strong>
          <input type='text' name='country code' placeholder='Country Code' value='+995' size='2' />
          <input
            value={phoneNum}
            onChange={e => setPhoneNum(e.target.value)}
            type='text'
            name='phone'
            placeholder='phone no.'
            size='10'
          />
        </label>

        <label>
          <strong> Current Address :</strong>
        </label>

        <textarea
          onChange={e => setTextValue(e.target.value)}
          cols='30'
          rows='5'
          placeholder='Current Address'
          value={textValue}
        />
      </div>
    </div>
  );
}
