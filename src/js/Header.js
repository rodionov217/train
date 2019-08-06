import React, { Fragment, useContext } from 'react';
import { TrainpickerForm } from './TrainpickerForm';
import { ProgressSteps } from './ProgressSteps';


const Header = (props) => {
  console.log(props);
  return (
    <Fragment>
      <section class="header">
        <div class="logo"><a class="logo__link" href="#">Лого</a></div>
        <nav>
          <ul class="nav">
            <li class="nav__item"><a class="nav__link" href="#about">О нас</a></li>
            <li class="nav__item"><a class="nav__link" href="#features">Как это работает</a></li>
            <li class="nav__item"><a class="nav__link" href="#reviews">Отзывы</a></li>
            <li class="nav__item"><a class="nav__link" href="#footer">Контакты</a></li>
          </ul>
        </nav>
      </section>
      <TrainpickerForm {...props}/>
      {props.location.pathname !== '/' ? <ProgressSteps/> : ''}
    </Fragment>
  )
}


export {Header}