import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SendbirdChat from '@sendbird/chat'
import { GroupChannelModule } from '@sendbird/chat/groupChannel'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const sendbird = SendbirdChat.init({
      appId: "//TODO: YOUR_APP_ID",
      modules: [
          new GroupChannelModule(),
      ],
    });
    sendbird.connect('sendbird').then((user, error) => {
      console.warn(user, error);
    })
    // sendbird.connect('sendbird', undefined),.then((user, error) => {
    //   console.warn(user, error);
    // })
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
