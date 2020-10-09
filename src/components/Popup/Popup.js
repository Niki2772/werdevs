import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './popup.module.scss';

class Popup extends Component {
  render() {
    const {onClose, show} = this.props;
    if (show) {
      return (
        <div>
          <div onClick={onClose} className={styles.popupOverlay}/>
          <div className={styles.popupWrap}>
            <div className={classNames(styles.popupDateIn, styles.first)} >
              <div className={styles.popupTitle}>Month</div>
              <form action="">
                <input type="text" value={this.props.month} className={styles.popupInput}/>
              </form>
            </div>
            <div className={styles.popupDateIn}>
              <div className={styles.popupTitle}>Day</div>
              <form action="">
                <input type="text" value={this.props.day} className={styles.popupInput}/>
              </form>
            </div>
            <button className={styles.popupCloseBtn} onClick={onClose}>
              <img src="/images/close-button.svg" alt=""/>
            </button>

          </div>
        </div>
      )
    }
    return <></>;
  }
}

Popup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  month: PropTypes.string,
  day: PropTypes.string,
}

export  default Popup;
