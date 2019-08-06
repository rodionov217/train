import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import SwitchGroup from './js/CustomSwitch';
import {Datepicker } from './js/Datepicker';
import MaskedInput from './js/MaskedInput'
//import CustomSlider from './CustomSlider';


ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<SwitchGroup label="Купе"/>, document.getElementById('switches'));
//ReactDOM.render(<CustomSlider />, document.getElementById('cost'));

ReactDOM.render(<Datepicker disablePast/>, document.getElementById('date-pickers'))
ReactDOM.render(<Datepicker disableFuture adornment={{style: {display: "none"}}}/>, document.getElementById('birth-picker'));
ReactDOM.render(<MaskedInput inputmask={[/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/]}/>, document.getElementById('maskedinput-1'));
ReactDOM.render(<MaskedInput inputmask={[/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/]}/>, document.getElementById('maskedinput-2'));
ReactDOM.render(<MaskedInput prefix="+7" inputmask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}/>, document.getElementById('maskedinput-3'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

