import {run} from '@cycle/core';
import {h, makeDOMDriver} from '@cycle/dom';
import backgroundsArr from '../backgrounds.js';
const backgroundIndex = Math.floor(Math.random() * 806);

const divStyles = {
  display: 'table',
  backgroundImage: 'url(' + backgroundsArr[backgroundIndex] + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
};

const textStyles = {
  display: 'table-cell',
  color: 'white',
  fontSize: '200px',
  textAlign: 'center',
  verticalAlign: 'middle',
  opacity: '0.75'
};

function currentTime() {
  const date = new Date(Date.now());
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let returnedHours = hours;
  if (hours === 0) { returnedHours += 12; }
  else if (hours > 12) { returnedHours -= 12; }
  const returnedMinutes = minutes < 10 ?
    '0' + minutes : minutes;

  return returnedHours + ':' + returnedMinutes;
}

function main(responses) {
  const requests = {
    DOM: responses.DOM.select('.field').events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        h('div', [
          h('p', Date())
        ])
      )
  };
  return requests;
}

run(main, {
  DOM: makeDOMDriver('.app')
});
