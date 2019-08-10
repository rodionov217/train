import React from 'react';

const ProgressSteps = (props) => {
  const current = props.location.pathname;
  const steps = [
    {
      step: "/search/seats",
      title: "Билеты"
    },
    {
      step: "/passengers",
      title: "Пассажиры"
    },
    {
      step: "/payment",
      title: "Оплата"
    },
    {
      step: "/confirmation",
      title: "Проверка"
    }
  ];

  const isCurrent = (element, i) => {
    return element.step.match(current) || i <= steps.findIndex(el => el.step === current)
  }

  return (
    <section class="progress">
      {steps.map((el, i) => (<div class={`progress__step ${isCurrent(el, i) ? "progress__step-current" : ""}`}>
       <span class="number">{i+1}</span>
       <span class="progress__text">{el.title}</span>
       {i === 3 ? null : <div class={`progress__arrow ${isCurrent(el, i) ? "progress__arrow-current" : ""}`}></div>}
     </div>)
     )}
   </section>
  )
}

export {ProgressSteps}

