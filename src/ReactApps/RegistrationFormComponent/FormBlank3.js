import React from 'react';

export default function FormBlank3({
  setPage,
  setActivePage,
  setInputValue1,
  setInputValue,
  setInputValue2,
  setChecked,
  setChecked1,
  setTextValue,
  setPhoneNum,
  setOptions,
  setRadioTypeValue,
}) {
  const handleResetBtn = () => {
    setPage('page-1');
    setActivePage(1);
    setInputValue('');
    setInputValue1('');
    setInputValue2('');
    setChecked(false);
    setChecked1(false);
    setPhoneNum('');
    setTextValue('');
    setRadioTypeValue('');
    setOptions('');
  };

  return (
    <div className='resetForm'>
      <button onClick={handleResetBtn} className='reset'>
        Reset Registration Form
      </button>
    </div>
  );
}
