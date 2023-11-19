import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = (event.target.value)
    // setAge(event.target.value)
    setMode(selectedMode)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="select-dark-light-mode"
        id="demo-select-small"
        value={mode}
        label="mode"
        onChange={handleChange}>
        <MenuItem value="light">
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <LightModeIcon fontSize='small'/> light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <DarkModeOutlinedIcon fontSize='small'/> dark 
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <SettingsBrightnessIcon fontSize='small'/> system
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect