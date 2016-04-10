import React from 'react'
import ReactDOM from 'react-dom'
import backgroundsArr from '../backgrounds.js'
import Settings from 'material-ui/lib/svg-icons/action/settings'
import injectTapEventPlugin from 'react-tap-event-plugin'
import SettingsApplications from 'material-ui/lib/svg-icons/action/settings-applications'
import IconButton from 'material-ui/lib/icon-button'

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
      theme: 'nature',
      open: false
    }
  }

  handlePop () {
    // this.setState({
    //   open: true
    // })
    console.log('hello')
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
        right: '1rem'
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
        <IconButton tooltip="Font Icon" iconStyle={{iconHoverColor: '#55ff55'}} style={styles.icon}>
          <Settings style={styles.settings} color={'white'} hoverColor={'#55ff55'} />
        </IconButton>
      </div>
    )
  }
}

injectTapEventPlugin()

        // <Settings style={styles.settings} color={'white'} hoverColor={'#55ff55'} onClick={this.handlePop} />

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
