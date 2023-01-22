import './RegistrationFormComponent/FormBlank.css';
import React, { useEffect, useState } from 'react';
import FormBlank1 from './RegistrationFormComponent/FormBlank1';
import FormBlank2 from './RegistrationFormComponent/FormBlank2';
import FormBlank3 from './RegistrationFormComponent/FormBlank3';
import LastBlank from './RegistrationFormComponent/LastBlank';

export default function RegistrationFormApp() {
  const [page, setPage] = useState('page-1');
  const [activePage, setActivePage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const [phoneNum, setPhoneNum] = useState('');
  const [textValue, setTextValue] = useState('');

  const [radioTypeValue, setRadioTypeValue] = useState('HTML');

  const [options, setOptions] = useState('volvo');

  useEffect(() => {
    setPage(`page-${activePage}`);
  }, [activePage]);

  const handleNextClick = () => {
    if (activePage < 4) {
      setActivePage(activePage + 1);
      console.log(activePage);
    }
  };

  const handleBackClick = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      console.log(activePage);
    }
  };

  return (
    <div className='MainCon'>
      <h1 className='RegistrationBlankH1'> Registration Form </h1>

      {page === 'page-1' && (
        <FormBlank1
          page={page}
          setPage={setPage}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setInputValue1={setInputValue1}
          inputValue1={inputValue1}
          setInputValue2={setInputValue2}
          inputValue2={inputValue2}
          setActivePage={setActivePage}
        />
      )}
      {page === 'page-2' && (
        <FormBlank2
          setChecked={setChecked}
          checked={checked}
          setChecked1={setChecked1}
          checked1={checked1}
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          setTextValue={setTextValue}
          textValue={textValue}
        />
      )}

      {page === 'page-3' && (
        <LastBlank
          setRadioTypeValue={setRadioTypeValue}
          radioTypeValue={radioTypeValue}
          options={options}
          setOptions={setOptions}
        />
      )}

      {page === 'page-4' && (
        <FormBlank3
          setPage={setPage}
          setActivePage={setActivePage}
          setInputValue={setInputValue}
          setInputValue1={setInputValue1}
          setInputValue2={setInputValue2}
          setChecked={setChecked}
          setChecked1={setChecked1}
          setPhoneNum={setPhoneNum}
          setTextValue={setTextValue}
          setRadioTypeValue={setRadioTypeValue}
          setOptions={setOptions}
        />
      )}

      <div className='buttons'>
        {activePage === 1 ? null : (
          <button onClick={handleBackClick} className='NextBtn'>
            back
          </button>
        )}

        <button disabled={activePage === 4} onClick={handleNextClick} className='NextBtn'>
          Next
        </button>
      </div>
    </div>
  );
}
