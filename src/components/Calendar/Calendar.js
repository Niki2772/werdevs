import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactCalendar from 'react-calendar';

import './Calendar.scss';

function Calendar({onClickDate}) {
  return (
    <ReactCalendar
      formatShortWeekday={(locale, date) => moment(date).format('dd')[0]}
      onClickDay={onClickDate}
      locale="en-EN"
    />
  );
}

Calendar.propTypes = {
  onClickDate: PropTypes.func.isRequired,
};

export default Calendar;




