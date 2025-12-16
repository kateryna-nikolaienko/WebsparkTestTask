import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

import calendarIcon from '../../assets/icons/calendar-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';

import './DateRange.scss';

function DateRange() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  return (
    <div className="date-range">
      <span className="date-range__label">Date</span>

      <div className="date-input">
        <Flatpickr
          id="date-from"
          value={from}
          options={{
            dateFormat: 'd-m-Y',
            maxDate: to || null,
            disableMobile: true,
          }}
          placeholder="from"
          className="date-input__field"
          onChange={([date]) => {
            setFrom(date ? date : '');
          }}
        />

        <button className="date-input__clear" onClick={() => setFrom('')}>
          <img src={closeIcon} alt="" />
        </button>

        <button className="date-input__calendar">
          <img src={calendarIcon} alt="" />
        </button>
      </div>

      <div className="date-input">
        <Flatpickr
          id="date-to"
          value={to}
          options={{
            dateFormat: 'd-m-Y',
            minDate: from || null,
            disableMobile: true,
          }}
          placeholder="to"
          className="date-input__field"
          onChange={([date]) => {
            setTo(date ? date : '');
          }}
        />

        <button className="date-input__clear" onClick={() => setTo('')}>
          <img src={closeIcon} alt="" />
        </button>

        <button className="date-input__calendar">
          <img src={calendarIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default DateRange;
