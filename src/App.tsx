import { useState } from 'react'
import './Styles/App.mod.css'

const { PhraseServiceClient } = require('./Services/phrases_grpc_web_pb')
const client = new PhraseServiceClient('http://localhost:8080')

// Language: typescript
type Language = 'Br' | 'Us' | 'Fr' | 'De' | 'La'

// 8080 is the port runinng docker Envoy proxy

// structure
// the web app calls http/1.1 on :8080 (envoy proxy)
// proxy calls for the grpc server with http/2 calls
// grpc response http/2 to proxy
// proxy response http/1.1 to web app

// useless but i need it
interface IResponse {
  author: string
  content: string
}

function App() {
  const [lang, setLang] = useState<Language>('Br')

  // need to improve this
  const Translations = {
    Headers: {
      Br: 'Por que o Ranger não está jogando o CBLOL?',
      Us: 'Why is Ranger not playing CBLOL?',
      Fr: 'Pourquoi Ranger ne joue-t-il pas à CBLOL ?',
      De: 'Waarom speelt Ranger geen CBLOL?',
      La: 'Cur Ranger non ludens CBLOL?',
    },
    ButtonText: {
      Br: 'Gerar Desculpinha',
      Us: 'Generate Excuses ',
      Fr: 'Générer une déculpion',
      De: 'Generiere Desculpion',
      La: 'Generare Desculpion',
    },
  }

  const [phrases, setPhrases] = useState<IResponse[]>([])

  const getPhrase = () => {
    // client.list({}, (err: any, phrases: any) => {
    //   if (err) {
    //     console.error(err)
    //   } else {
    //     console.log(phrases)
    //   }
    // })
  }
  return (
    <div className='Main'>
      <h2 className='Header'>{Translations.Headers.Br}</h2>
      <button onClick={getPhrase} className='GenerateButton'>
        {lang === 'Br' ? 'Gerar desculpinha!' : 'Test'}{' '}
      </button>
      <h1>Porque não</h1>
      <div className='LanguageSelector'>
        <button onClick={() => setLang('Br')}>Br</button>
        <button onClick={() => setLang('Us')}>Us</button>
        <button onClick={() => setLang('Fr')}>Fr</button>
        <button onClick={() => setLang('De')}>De</button>
        <button onClick={() => setLang('La')}>La</button>
      </div>
    </div>
  )
}

export default App
