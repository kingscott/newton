'use-strict'

import React from 'react'
import ReactDOM from 'react-dom'
import backgroundsArr from '../backgrounds'
// import Settings from 'material-ui/lib/svg-icons/action/settings'
// import injectTapEventPlugin from 'react-tap-event-plugin'
// import SettingsApplications from 'material-ui/lib/svg-icons/action/settings-applications'
// import pure from 'recompose/pure'
// import IconButton from 'material-ui/lib/icon-button'
// import RaisedButton from 'material-ui/lib/raised-button'
// import Popover from 'material-ui/lib/popover/popover'
// import SelectField from 'material-ui/lib/SelectField'
// import MenuItem from 'material-ui/lib/menus/menu-item'

const backgroundIndex = Math.floor(Math.random() * 806)

function currentTime () {
  const date = new Date(Date.now())
  const hours = date.getHours()
  const minutes = date.getMinutes()
  let returnedHours = hours
  if (hours === 0) { returnedHours += 12 }
  else if (hours > 12) { returnedHours -= 12 }
  const returnedMinutes = minutes < 10
  ? '0' + minutes : minutes

  return returnedHours + ':' + returnedMinutes
};

export default class App extends React.Component {
  constructor (props) {
    super(props)
    setInterval(() => {
      this.setState({ time: currentTime() })
    }, 1 * 1000)
    this.state = {
      time: currentTime(),
      theme: 1,
      open: false
    }
  }

  handlePop (event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose () {
    this.setState({
      open: false
    })
  }

  render () {
    const styles = {
      textStyles: {
        maxWidth: '100%',
        color: 'white',
        fontSize: '200px',
        textAlign: 'center',
        opacity: '0.75',
        width: '100%'
      },
      settings: {
        position: 'absolute',
        // top: 're',
        // right: '1rem',
        width: '24px',
        height: '24px'
      },
      icon: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        margin: '0px'
      },
      popover: {
        padding: '20px'
      },
      section: {
        display: 'flex',
        background: 'black',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + backgroundsArr[backgroundIndex] + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }
    }

    return (
      <div style={styles.section}>
        <p style={styles.textStyles}> {this.state.time} </p>

      </div>
    )
  }
}

// <IconButton style={styles.icon} color={'white'} onClick={(e) => this.handlePop(e)}>
//           <Settings color={'white'} />
//           <Popover
//           open={this.state.open}
//           anchorEl={this.state.anchorEl}
//           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
//           targetOrigin={{horizontal: 'right', vertical: 'top'}}
//           onRequestClose={() => this.handleRequestClose()}
//         >
//           <div style={styles.popover}>
//             <p> Need to abstract bro </p>
//           </div>
//         </Popover>
//         </IconButton>

// injectTapEventPlugin()

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
