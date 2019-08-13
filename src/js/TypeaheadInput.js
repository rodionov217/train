import React, { useContext, useState, useEffect } from 'react'
import {ApiServiceContext} from './context';


const TypeaheadInput = (props) => {
  const api = useContext(ApiServiceContext);
  const {placeholder, onSelect} = props;
  const [cities, setCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [hint, setHint] = useState('');
  const [inputValue, setInputValue] = useState(props.value);
  
  useEffect(() => {
    if (props.value !== inputValue) {
      setInputValue(props.value);
      //setHint(props.value);
      console.log('EFFECT')
    }
  }, [props.value]);

  const handleFocus = (event) => {
    console.log('FOCUS');
    const value = event.currentTarget.value || 'а';
    api.getCities(value).then(response => {
      //console.log('request', value, response);
      let newHint = response.length > 0 ? response.find(el => el.name.startsWith(value)) : '';
      setHint('');
      setShowSuggestions(true);
      setCities(response);
    });
  }

  const handleBlur = () => {
    setShowSuggestions(false);
  }


  const handleInput = event => {
    const value = event.currentTarget.value;
    console.log(value);
    if (value.match(/[^а-яА-я ]/)) {
      return;
    }

    setInputValue(value);

    api.getCities(value).then(response => {
     // console.log('request', value, response);
      let newHint = response.length > 0 ? response.find(el => el.name.startsWith(value)) : '';
      setHint(newHint ? newHint.name : '');
      setShowSuggestions(true);
      setCities(response);

    });
  }

  const handleSelect = event => {
    setInputValue(event.target.textContent);
    setHint('');
    setShowSuggestions(false);

    onSelect({
      name: event.target.textContent, 
      id: event.target.dataset.id
    });
  }
let suggestions, current = -1;
  const handleKeydown = event => {
    if (!suggestions) {
      return;
    }
    switch (event.key) {
      case 'ArrowDown':
        current++;
        Array.from(suggestions.children).forEach(el => el.classList.remove('suggestion-active'));
        if (current > suggestions.children.length - 1) {
          current = 0;
        }
        suggestions.children[current].classList.add('suggestion-active');
        break;
      case 'ArrowUp':
        current--;
        Array.from(suggestions.children).forEach(el => el.classList.remove('suggestion-active')); 
        if (current < 0) {
          current = suggestions.children.length - 1;
        }
        suggestions.children[current].classList.add('suggestion-active');
        break;
      case 'Enter':
        let active = (Array.from(suggestions.children)).find(el => el.classList.contains('suggestion-active'));
        if (!active) {
          return;
        }
        onSelect({
          name: active.textContent,
          id: active.dataset.id
        });
        setHint('');
        setShowSuggestions(false);
        break;
      default:
        handleInput(event);
    }
    
  }

  return (
    
    <div class="input-with-icon">
      <span className="trainpicker__hint">
        <span className="trainpicker__hint-transparent">{hint.slice(0, inputValue.length)}</span>{hint.slice(inputValue.length)}
      </span>
      <input className="trainpicker__input trainpicker__input-direction" value={inputValue} onChange={handleInput} onFocus={handleFocus} onBlur={handleBlur} type="text" placeholder={placeholder} onKeyDown={handleKeydown}/>
      <i class="material-icons trainpicker__icon">room</i>
      {showSuggestions && cities.length > 0 ? 
        <ul ref={el => suggestions = el} class="suggestions" onClick={handleSelect}>
          {cities.map(city => <li key={city._id} data-id={city['_id']}>{city.name}</li>)}
        </ul> :
        null
      }
    </div>
  )
}

export {TypeaheadInput}