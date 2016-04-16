import React from 'react'
import ReactDOM from 'react-dom'
import backgroundsArr from '../backgrounds.js'
import Settings from 'material-ui/lib/svg-icons/action/settings'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import SettingsApplications from 'material-ui/lib/svg-icons/action/settings-applications'
import pure from 'recompose/pure'
import IconButton from 'material-ui/lib/icon-button'
import RaisedButton from 'material-ui/lib/raised-button'
import Popover from 'material-ui/lib/popover/popover'
import SelectField from 'material-ui/lib/SelectField'
import MenuItem from 'material-ui/lib/menus/menu-item'

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

    // let NewSettings = (props) => (
    //   ` <Settings {...props} color={props.color} hoverColor={props.hoverColor} >
    //       <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    //     </Settings>`
    // )
    //
    // NewSettings = pure(NewSettings)
    // NewSettings.displayName = 'NewSettings'
    // let s = {
    //   color: 'white',
    //   hoverColor: '#55ff55'
    // }

    return (
      <div style={styles.section}>
        <p style={styles.textStyles}> {this.state.time} </p>
        <IconButton style={styles.icon} color={'white'} onClick={(e) => this.handlePop(e)}>
          <Settings color={'white'} />
          <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={() => this.handleRequestClose()}
        >
          <div style={styles.popover}>
            <p> Need to abstract bro </p>
          </div>
        </Popover>
        </IconButton>
      </div>
    )
  }
}

injectTapEventPlugin()

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
