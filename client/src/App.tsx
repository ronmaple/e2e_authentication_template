import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'


import Album from './components/Album/Album'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

// TODO add theme
const defaultTheme = createTheme()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <Album />
      <Footer />
    </ThemeProvider>
  )
}

export default App