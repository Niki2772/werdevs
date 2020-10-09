import React, {Component} from 'react';
import classNames from 'classnames';

import styles from './header.module.scss';

export default class Header extends Component {
  state = {
    isBurgerVisible: false
  }

  onToggleBurger = () => {
    const {isBurgerVisible} = this.state;

    this.setState({
      isBurgerVisible: !isBurgerVisible
    },()=>{
      if (this.state.isBurgerVisible) {
        document.body.classList.add('lock');
      } else {
        document.body.classList.remove('lock');
      }
    })
  }

  render() {
    const {isBurgerVisible} = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBody}>
            <a href="/" className={styles.headerLogo}><img src="/images/logo.svg" alt=""/></a>
            <nav className={classNames({
                [styles.headerMenu]: true,
                [styles.active]: isBurgerVisible
            })}>
              <ul className={styles.headerList}>
                <li><a href="/" className={styles.navItem}>Home</a></li>
                <li><a href="/" className={styles.navItem}>About us</a></li>
              </ul>
            </nav>
            <div className={classNames({
              [styles.headerBurger]: true,
              [styles.active]: isBurgerVisible
            })}
                 onClick={this.onToggleBurger}>
              <span/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}