import './Dropdown.css';
import { useState } from 'react';
import DropDownCom from './DropDownCom';

export default function DropDown() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    console.log('opened');
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
    console.log('clicked two');
  };

  return (
    // <div className='dropdown'>
    //   <button onClick={handleOpen}>Dropdown</button>
    //   {open ? (
    //     <ul className='menu'>
    //       <li className='menu-item'>
    //         <button onClick={handleMenuOne}>Menu 1</button>
    //       </li>
    //       <li className='menu-item'>
    //         <button onClick={handleMenuTwo}>Menu 2</button>
    //       </li>
    //     </ul>
    //   ) : null}
    // </div>
    <div className='dropdownCon'>
      <DropDownCom
        open={open}
        trigger={<button onClick={handleOpen}>Dropdown</button>}
        menu={[
          <button onClick={handleMenuOne}>Menu 1</button>,
          <button onClick={handleMenuTwo}>Menu 2</button>,
          <button onClick={handleMenuTwo}>Menu 3</button>,
          <button onClick={handleMenuTwo}>Menu 4</button>,
        ]}
      />
    </div>
  );
}
