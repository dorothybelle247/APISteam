import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

const apiKey="vn49yhgxubkc";

const client = StreamChat.getInstance(apikey)

const App = () => {
  return (
    <div className="app__wrapper">
      <h1>Chaty</h1>
      <Chat client={client} theme="">
        <ChanelListContainer />
        <ChanelContainer />
      </Chat>
    </div>
  )
}

export default App
