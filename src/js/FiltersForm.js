import React from 'react';

const FiltersForm = () => {
  return (
    <form action="" class="search-form ">
         <fieldset class="search-form__set" >
           <div class="date-filter" >
              <label class="trainpicker_label">Дата поездки</label>
              <div id="date-pickers"></div>
              <div class="input-with-icon">
                <input class="trainpicker__input trainpicker__input-small trainpicker__input-date" type="text" name="departure-date"  placeholder="ДД/ММ/ГГ" />
                <i class="material-icons trainpicker__icon trainpicker__icon-small">event</i>
              </div>
              
              <label class="trainpicker_label">Дата возвращения</label>
              <div class="input-with-icon">
                <input class="trainpicker__input trainpicker__input-small trainpicker__input-date" type="date" name="return-date" placeholder="ДД/ММ/ГГ"/>
                <i class="material-icons trainpicker__icon trainpicker__icon-small">event</i>
              </div>
           </div>
         </fieldset>
         <fieldset class="seat-types">
           <div id="switches"></div>
         </fieldset>
         <fieldset class="cost-picker" >
           <label class="trainpicker_label">Стоимость</label>
           <input type="text" id="range-slider1" class="price-range-picker" name="my_range" value="" />
         </fieldset>
         <fieldset class="time-picker">
            <label class="trainpicker_label trainpicker_label-to">Туда</label>
            <label class="range-picker_label" for="">Время отправления</label>
            <input type="text" class="to-departure-time-range-picker" name="my_range" value="" />
            <label class="range-picker_label" for="">Время прибытия</label>
            <input type="text" id="range-slider2"  class="to-arrival-time-range-picker" name="my_range" value="" />
         </fieldset>
         <fieldset class="time-picker">
            <label  class="trainpicker_label trainpicker_label-back ">Обратно</label>
            <label class="range-picker_label" for="">Время отправления</label>
            <input type="text" class="from-departure-time-range-picker" name="my_range" value="" />
            <label class="range-picker_label" for="">Время прибытия</label>
            <input type="text" id="range-slider2"  class="from-arrival-time-range-picker" name="my_range" value="" />
         </fieldset>
       </form>
  )
}

export {FiltersForm}