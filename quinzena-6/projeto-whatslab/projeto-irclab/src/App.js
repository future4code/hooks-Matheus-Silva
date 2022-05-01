import React from 'react';
import './App.css';
import { SendButton } from "./components/stijl";
import { Head } from "./components/stijl";
import { Main } from "./components/stijl";

// import styled from "styled-components";
// import { Textbox } from './components/Textbox';
// import { Enviar } from './components/Enviar';
// import { Msg } from './components/Msg';
// import { Usuario } from './components/Usuario';


export default class App extends React.Component {
  state = {
    user:'',
    msg: '',
    msgStack: [
      {user : 'bot', msg: 'e.g. msg'}, 
      { user: 'bot2', msg: 'e.g. another msg'}
    ] 
  }

  newUser(ev) {
    this.setState({ user: ev.target.value });
  }

  newMsg(ev) {
    this.setState({ msg: ev.target.value });
  }

  addMsg() {
    const newMsgStack = [...this.state.msgStack, {
      user: this.state.user,
      msg: this.state.msg, 
    }]
    this.setState({ msgStack: newMsgStack, user: '', msg: ''})
  }

  render() {
    return (
      <>
      <Head 
      style={
        { display: 'flex',
          backgroundColor: '#121214',
          minHeight: '10vh',
          minWidth: '100vw',
          justifyContent: 'center',
          border: '3px solid purple',
          padding: 10
        }}
        >
        <input 
          autoFocus
          value={this.state.user} 
          onChange={this.newUser.bind(this)} 
          type='text' 
          placeholder='Usuário'
         />
        <input 
          value={this.state.msg} 
          onChange={(ev) => this.newMsg(ev)} 
          type='text' 
          placeholder="Mensagem"
         />
        <SendButton  onClick={() => {
            return this.addMsg();
          }}>Enviar Mensagem
        </SendButton>
      </Head>
      <Main 
      // style={
      //   { display: 'flex',
      //     flexDirection: 'column',
      //     marginLeft: '30%',
      //     minHeight: '80vh',
      //     maxWidth: '40vw',
      //     color: '#e1e1f6',
      //     alignItems: 'baseline',
      //     justifyContent: 'center',
      //     border: '2px solid purple',
      //     padding: 10,
      //   }}
        >{this.state.msgStack.map((sentmsg, i) => {
          return (
            <>
            <div key={i} style={{
              display: 'flex', 
              justifyContent: 'space-around',
              margin: 10,
              padding: 10,
              }}>
                <span style={{padding: 10}}>{ sentmsg.user }</span>
                <span style={{padding: 10}}>{ sentmsg.msg }</span>
            </div>
            </>
          );
        })}
      </Main>
      </>);
  }
} 


// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default App;
