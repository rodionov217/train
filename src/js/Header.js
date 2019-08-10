import React, { Fragment, useContext, useRef } from 'react';
import { TrainpickerForm } from './TrainpickerForm';
import { ProgressSteps } from './ProgressSteps';
import { Link } from 'react-router-dom';


const Header = (props) => {
  const {homepageRefs} = props;

  const handleClick = event => {
    const top = homepageRefs[event.currentTarget.dataset.id];
    const scrollOptions = {
      top: top,
      behavior: 'smooth'
    }
    if (props.location.pathname === '/') {
      event.preventDefault();
    }
    window.scrollTo(scrollOptions);
  }

  return (
    <Fragment>
      <section class="header">
        <div class="logo"><Link class="logo__link" to="/">TrainBooking</Link></div>
        <nav>
          <ul class="nav">
            <li  class="nav__item"><Link onClick={handleClick} class="nav__link" data-id="about" to='/'>О нас</Link></li>
            <li  class="nav__item"><Link to='/' onClick={handleClick} data-id="how" class="nav__link" >Как это работает</Link></li>
            <li  class="nav__item"><Link to='/' onClick={handleClick} data-id="reviews" class="nav__link" >Отзывы</Link></li>
            <li  class="nav__item"><Link to='/' onClick={handleClick} data-id="contacts" class="nav__link" href="#footer">Контакты</Link></li>
          </ul>
        </nav>
      </section>
      <TrainpickerForm {...props}/>
        {(props.location.pathname === '/' ||  props.location.pathname === '/success') ? null : <ProgressSteps {...props}/>}
    </Fragment>
  )
}


export {Header}