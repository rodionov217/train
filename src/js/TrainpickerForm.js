import React, { useContext, useState } from 'react';
import { TypeaheadInput } from './TypeaheadInput'
import { ApiServiceContext } from './context';
import { Link } from 'react-router-dom';
import { Datepicker } from './Datepicker';

const MainSearchForm = (props) => {
  const api = useContext(ApiServiceContext);
  const {horizontal} = props;
  const [fromName, setFromName] = useState('');
  const [fromId, setFromId] = useState('');
  const [toName, setToName] = useState('');
  const [toId, setToId] = useState('')
  const [date, setDate] = useState(new Date());
  const [dateBack, setDateBack] = useState(null);

  const handleSwap = () => {
    setFromName(toName);
    setToName(fromName);
  }

  const handleSubmit = () => {
    props.setSearchParams({
      from: {
        name: fromName,
        id: fromId
      },
      to: {
        name: toName,
        id: toId 
      },
      date: date.toISOString().substr(0, 10),
      dateBack: dateBack && dateBack.toISOString().substr(0, 10)
    });
    if (props.location.pathname !== '/') {
      window.scrollTo({
        top: document.querySelector('.col-right').offsetTop,
        behavior: 'smooth'
      })
    }
  }

    return (
      <form  className={`trainpicker ${horizontal ? 'trainpicker-horizontal' : ''}`}>
        {horizontal ? null : <div><h2 className="trainpicker__header">Укажите направление и дату поездки:</h2></div>}
            <div className={`trainpicker__content ${horizontal ? 'trainpicker__content-horizontal' : ''} `}>
              <label className="trainpicker_label">Направление</label>
              <div className="trainpicker__inputs">
                <TypeaheadInput 
                  value={fromName}
                  placeholder="Откуда"
                  onSelect={city => {
                  setFromName(city.name);
                  setFromId(city.id)
                  }}/>
                <div onClick={handleSwap} className="trainpicker__reverse" type="checkbox" name="reverse" id="reverse">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <TypeaheadInput 
                value={toName}
                  placeholder="Куда"
                  onSelect={city => {
                  setToName(city.name);
                  setToId(city.id)
                  }}/>
              </div>
            </div>
            <div className={`trainpicker__content ${horizontal ? 'trainpicker__content-horizontal' : ''} `}>
              <label className="trainpicker_label">Дата</label>
              <div className="trainpicker__inputs" >
                <Datepicker 
                  style={{width: "285px", height: "52px"}} 
                  onDateSelect={date => {
                    sessionStorage.travelDate = date;
                    setDate(date)}}
                  defaultDate={new Date()}
                  />
              </div>
            </div>
            
            <button onClick={e => e.preventDefault()} type="submit" disabled={!(fromName && toName)} className={`trainpicker__button ${horizontal ? 'trainpicker__button-horizontal' : ''} `}>
              {fromName && toName ? 
                <Link to='/search'
                  onClick={handleSubmit}>Найти билеты</Link> :
                "Найти билеты" }
            </button>
            
          </form>
    )
}

const TrainpickerForm = (props) => {
  const path = props.location.pathname;
  if (path === '/success') {
    return (
      <section className="main-search main-search-success"></section>
    )
  }
  if (path !== '/') {
    return (
      <section className="main-search">
        <MainSearchForm horizontal {...props}/>
      </section>
      )
  }
  if (path === '/') { 
    return (
    <section className="main" id="main">
      <div class="overlay"></div>
      <div className="main__motto">
        <div className="motto">Вся жизнь - 
          <div className="motto-bold">путешествие!</div> 
        </div>
      </div>
      <div className="main__picker">
        <MainSearchForm {...props}/>
        
      </div>
    </section>
  )
  }
  }

export {TrainpickerForm}

