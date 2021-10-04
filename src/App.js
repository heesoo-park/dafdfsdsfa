import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Tag from './components/TagScore';
import Games from './components/Games';
import Footer from './components/Footer';

class App extends Component {
  state = {
    posts: []
  };

  handleCreate = (data) => {
    console.log(data);
  }
  
  render() {
    return (
      <div className="App">
        <div>
          {this.state.posts.map(item => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <span>{item.content}</span>
            </div>
                ))}
            </div>
        <Header />
        <Search onCreate={this.handleCreate} />
        <Tag />
        <Games />
        <Footer />  
      </div>
    )
  }
  
}

export default App;
