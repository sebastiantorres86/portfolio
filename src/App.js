import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Blog,
  Personal,
  Project,
  Skills,
  Experiences,
  Hobbies
} from './components'
import { GlobalStyles } from './global'
import { theme } from './theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <section>
          <Personal />
        </section>
        <section>
          <Project />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Blog />
        </section>
        <section>
          <Experiences />
        </section>
        <section>
          <Hobbies />
        </section>
      </>
    </ThemeProvider>
  )
}

export default App
