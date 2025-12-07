import React, { Component } from 'react'
import style from "../styles/components/header.module.scss"

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className={style.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLXqHb-IcHwX23PRhIHo7cgUaLaOqEwtRAA&s" alt="logo" />
            <h1>TryToEatDeadlyMushroom</h1>
        </header>
      </div>
    )
  }
}
