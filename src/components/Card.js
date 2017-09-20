import React, { Component } from 'react';
import '../normalize.css';
import '../App.css';
import CardList from './CardList';
import posts from '../posts';

class Card extends Component {

  constructor(){
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount(){
    this.setState({
      posts
    });
  }

  render() {
    
    return (
      <div>
        <CardList posts={this.state.posts}></CardList>
      </div>
    );
  }
}

export default Card;
