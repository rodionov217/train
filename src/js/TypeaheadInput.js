import React, { useContext, useState, useEffect } from 'react'
import {ApiServiceContext} from './context';


const TypeaheadInput = (props) => {
  const api = useContext(ApiServiceContext);
  const {placeholder, onSelect} = props;
  const [cities, setCities] = useState([]);
  const [hint, setHint] = useState('');
  const [inputValue, setInputValue] = useState(props.value);
  
  useEffect(() => {
    if (props.value !== inputValue) {
      setInputValue(props.value);
      setHint(props.value);
    }
  }, [props.value]);
  const handleInput = event => {
    const value = event.currentTarget.value;
    
    if (value.match(/[^а-яА-я ]/)) {
      return;
    }

    setInputValue(value);

    api.getCities(value).then(response => {
      let newHint = response.length > 0 ? response.find(el => el.name.startsWith(value)) : '';
      setHint(newHint ? newHint.name : '');
      setCities(response);
    });
  }

  const handleSelect = event => {
    setInputValue(event.target.textContent);
    setHint(event.target.textContent)
    setCities([]);
    onSelect({
      name: event.target.textContent, 
      id: event.target.dataset.id
    });
  }

  return (
    
    <div class="input-with-icon">
      <span className="trainpicker__hint">
        <span className="trainpicker__hint-transparent">{hint.slice(0, inputValue.length)}</span>{hint.slice(inputValue.length)}
      </span>
      <input className="trainpicker__input trainpicker__input-direction" /* value={inputValue}  */onChange={handleInput} type="text" placeholder={placeholder} />
      <i class="material-icons trainpicker__icon">room</i>
      {cities.length > 0 ? 
        <ul class="suggestions" onClick={handleSelect}>
          {cities.map(city => <li key={city._id} data-id={city['_id']}>{city.name}</li>)}
        </ul> :
        null
      }
    </div>
  )
}

export {TypeaheadInput}