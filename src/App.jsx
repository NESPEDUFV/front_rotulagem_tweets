import * as React from 'react'
import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.sass'

import Button from '@mui/material/Button'

import CancelIcon from '@mui/icons-material/Cancel'
import Woman2Icon from '@mui/icons-material/Woman2'
// import LocalPoliceIcon from '@mui/icons-material/LocalPolice'
import PanToolIcon from '@mui/icons-material/PanTool'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import MoodBadIcon from '@mui/icons-material/MoodBad'
import TwitterIcon from '@mui/icons-material/Twitter'

const API_URL = "http://localhost:3000/"

function App() {

  const [tweet, setTweet] = useState('')

  const carregarTweetRotular = async () => {
    const response = await fetch(`${API_URL}tweets/listar/tweet/rotular`, {
      method: "GET"
    })

    const data = await response.json()

    // console.log(data)

    if (!data.error)
      setTweet(data.tweet)
    
  }

  const rotulaTweet = async (categoria) => {
    console.log(categoria, tweet.idTweet)
    console.log(JSON.stringify({ categoriaRotulo: categoria, idTweet: tweet.idTweet }))
    const response = await fetch(`${API_URL}tweets/rotular/tweet`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'Access-Control-Request-Headers': 'Content-Type, Authorization'
      },
      method: "POST",
      body: JSON.stringify({ categoriaRotulo: categoria, idTweet: tweet.idTweet })
    })

    const data = await response.json()

    // console.log(data, categoria)

    if (!data.error)
      carregarTweetRotular()

  }

  useEffect(() => {
    carregarTweetRotular()
  }, [])

  return (
    <main>
      <div className="box-tweet">
        <div className="titulo">
          <h2>Rotule os <span className="cor-tweet"> Tweets </span> <TwitterIcon className="cor-logo-twitter"/> dizendo se estão relacionados com crimes ou não!</h2>
        </div>
        <div className="conteudo">
          <h3>{tweet.text}</h3>
          <div className="opcoes-rotulo">
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              className="espaco-botoes"
              onClick={() => rotulaTweet('Sem relação')}
            >
              Não possui relação com crimes
            </Button>
            <div className="categorias-crimes">
              <Button
                variant="contained"
                endIcon={<Woman2Icon />}
                className="espaco-botoes"
                onClick={() => rotulaTweet('Assédio')}
              >
                Assédio
              </Button>
              <Button
                variant="contained"
                endIcon={<PanToolIcon />}
                className="espaco-botoes"
                onClick={() => rotulaTweet('Roubo')}
              >
                Roubo
              </Button>
              <Button
                variant="contained"
                endIcon={<VisibilityOffIcon />}
                className="espaco-botoes"
                onClick={() => rotulaTweet('Furto')}
              >
                Furto
              </Button>
              <Button
                variant="contained"
                endIcon={<MoodBadIcon />}
                className="espaco-botoes"
                onClick={() => rotulaTweet('Homicídio')}
              >
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
