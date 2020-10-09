import React, {Component} from 'react';
import moment from 'moment';

import Calender from '../Calendar/Calendar';
import Popup from '../Popup/Popup';
import styles from './main.module.scss';

export default class Main extends Component {
  state = {
    selectedDay: null,
    selectedMonth: null,
    isModalVisible: false
  };

  onCloseModal = () => {
    this.setState({
      isModalVisible: false
    })
  }

  onOpenModal = (date) => {
    const momentDate = moment(date);
    this.setState({
      isModalVisible: true,
      selectedDay: `${momentDate.format('Do')} ${momentDate.format('dddd')}`,
      selectedMonth: momentDate.format('MMMM'),
    });
  }

  render() {
    const {isModalVisible, selectedDay, selectedMonth} = this.state;
    return (
      <main className={styles.mainWrapper}>
        <div className={styles.mainColLeft}>
          <div className={styles.mainColLeftInfo}>
            <h1 className={styles.mainPageTitle}>Choose the day for the meeting</h1>
            <h2 className={styles.mainPageDescription}>We encourage you to book your appointment online. This will save
              you
              time.</h2>
          </div>
        </div>
        <div className={styles.mainColRight}>
          <Calender onClickDate={this.onOpenModal}/>
        </div>
        <Popup show={isModalVisible}
               month={selectedMonth}
               day={selectedDay}
               onClose={this.onCloseModal}/>
      </main>
    )
  }
}