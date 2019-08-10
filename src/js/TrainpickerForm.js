import React, { useContext, useState } from 'react';
import {TypeaheadInput} from './TypeaheadInput'
import {ApiServiceContext} from './context';
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

    return (
      <form  class={`trainpicker ${horizontal ? 'trainpicker-horizontal' : ''}`}>
            <div class={`trainpicker__content ${horizontal ? 'trainpicker__content-horizontal' : ''} `}>
              <label class="trainpicker_label">Направление</label>
              <div class="trainpicker__inputs">
                <TypeaheadInput 
                  value={fromName}
                  placeholder="Откуда"
                  onSelect={city => {
                  setFromName(city.name);
                  setFromId(city.id)
                  }}/>
                <div onClick={handleSwap} class="trainpicker__reverse" type="checkbox" name="reverse" id="reverse">
                  <i class="fas fa-exchange-alt"></i>
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
            <div class={`trainpicker__content ${horizontal ? 'trainpicker__content-horizontal' : ''} `}>
              <label class="trainpicker_label">Дата</label>
              <div class="trainpicker__inputs" >
                <Datepicker 
                  style={{width: "285px", height: "50px"}} 
                  onDateSelect={date => {
                    sessionStorage.travelDate = date;
                    setDate(date)}}
                  defaultDate={new Date()}
                  />
              </div>
            </div>
            
            {/* <button onClick={e => e.preventDefault()} type="submit"> */}
              <button onClick={e => e.preventDefault()} type="submit" disabled={!(fromName && toName)} className={`trainpicker__button ${horizontal ? 'trainpicker__button-horizontal' : ''} `}>
                {fromName && toName ? 
                  <Link to='/search'
                    onClick={() => {
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
                      })
                    }}>Найти билеты</Link> :
                  "Найти билеты" }
              </button>
            
             
          </form>
    )
}

const TrainpickerForm = (props) => {
  const path = props.location.pathname;
  if (path === '/success') {
    return (
      <section class="main-search main-search-success"></section>
    )
  }
  if (path !== '/') {
    return (
      <section class="main-search">
        <MainSearchForm horizontal {...props}/>
      </section>
      )
  }
  if (path === '/') { 
    return (
    <section class="main" id="main">
      <div class="main__motto">
        <div class="motto">Вся жизнь - 
          <div class="motto-bold">путешествие!</div> 
        </div>
      </div>
      <div class="main__picker">
        <MainSearchForm {...props}/>
        
      </div>
    </section>
  )
  }
  }

export {TrainpickerForm}

