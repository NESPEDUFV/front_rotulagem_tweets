import * as React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.sass'

import Button from '@mui/material/Button'
// import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import CancelIcon from '@mui/icons-material/Cancel'
import Woman2Icon from '@mui/icons-material/Woman2'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'
import PanToolIcon from '@mui/icons-material/PanTool'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import MoodBadIcon from '@mui/icons-material/MoodBad'
import TwitterIcon from '@mui/icons-material/Twitter';

// import Stack from '@mui/material/Stack'

function App() {

  return (
    <main>
      <div className="box-tweet">
        <div className="titulo">
          <h2>Rotule os <span className="cor-tweet"> Tweets </span> <TwitterIcon className="cor-logo-twitter"/> dizendo se estão relacionados com crimes ou não!</h2>
        </div>
        <div className="conteudo">
          <h3>Tweet</h3>
          <div className="opcoes-rotulo">
            <Button variant="outlined" startIcon={<CancelIcon />} className="espaco-botoes">
              Não possui relação com crimes
            </Button>
            <div className="categorias-crimes">
              <Button variant="contained" endIcon={<Woman2Icon />} className="espaco-botoes">
                Assédio
              </Button>
              <Button variant="contained" endIcon={<PanToolIcon />} className="espaco-botoes">
                Roubo
              </Button>
              <Button variant="contained" endIcon={<VisibilityOffIcon />} className="espaco-botoes">
                Furto
              </Button>
              <Button variant="contained" endIcon={<MoodBadIcon />} className="espaco-botoes">
                Homicídio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
