import {useColorScheme} from '@mui/material/styles'
import Typoraphy from '@mui/material/Typography'
import Button from '@mui/material/Button'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
function App() {

  return (
    <>
      <ModeToggle/>
      <hr/>
      <Typoraphy variant='body2' color="text.secondary">Test Typoraphy</Typoraphy>
      <Button variant="contained">Hello world</Button>
    </>
  )
}

export default App
