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

function main() {
// TODO grab new background

  return h('div', [
    h('p', {
      style: textStyles
    }, currentTime())
  ], {
    style: {divStyles}
  });
}

const App = React.createClass({

  getInitialState() {
    setInterval(() => {
      this.setState({ time: currentTime() });
    }, 1 * 1000);
    return { time: currentTime() };
  },

  render() {
    // const divStyles = {
    //   display: 'table',
    //   backgroundImage: 'url(' + backgroundsArr[backgroundIndex] + ')',
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   width: '100%',
    //   height: '100%'
    // };
    // const textStyles = {
    //   display: 'table-cell',
    //   color: 'white',
    //   fontSize: '200px',
    //   textAlign: 'center',
    //   verticalAlign: 'middle',
    //   opacity: '0.75'
    // };
    return (
      <div style={divStyles}>
        <p style={textStyles}> {this.state.time} </p>
      </div>
    );
  }
});

run(main, {
  // DOM: TODO
});
