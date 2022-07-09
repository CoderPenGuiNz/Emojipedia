import React from 'react';
import emojipedia from '../emojipedia';
import Header from "./Header";
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div>
        <Header />
        
        <dl className="dictionary"> {emojipedia.map(item => <Content
        key={item.id}
        emoji={item.emoji}
        name={item.name}
        meaning={item.meaning}

        />)}</dl>
        
        <Footer />
    </div>
  )
}

export default App