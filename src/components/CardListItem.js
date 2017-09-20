import React, { Component } from 'react';
import axios from 'axios';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import {randomCounter} from '../helper';

class CardListItem extends Component {
	constructor(){
		super();

		this.state = {
      counter: [],
      likes: false,
      post_info: []
    };

    this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		axios.get('https://randomuser.me/api')
			.then((res) => {
				const randomUser = res.data.results;
				this.setState({
					counter: randomCounter(),
					post_info: randomUser
				});
			})
			.catch(err => {
				console.log(err);
			})
	}

	handleClick(e){
    if(!this.state.like){
      this.setState({
        counter: this.state.counter + 1,
        like: !this.state.like
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
        like: !this.state.like
      });
    }
  }
	
	render(){

		const { card_item } = this.props,
					{ post_info } = this.state,
					toggleImg = this.state.like ? like : dislike;

		return (
			<li className="card">
				<img src={card_item.image} alt={card_item.title}/>
				<div className="card-content">
					<h1 className="card-title">{card_item.title}</h1>
					<p className="card-description">{card_item.desc}</p>
					<div className="post-info">
						<img src={post_info.length && post_info[0].picture.thumbnail} alt="name"/>
						<div className="post-author">
							<span>{post_info.length && post_info[0].name.first}</span>
							<span> {post_info.length && post_info[0].name.last}</span>
							<div className="post-time">4 min</div>
						</div>
					</div>
					<div className="like-btn">
						<img onClick={this.handleClick} src={toggleImg} alt="like-dislike"/>
        		<strong>{this.state.counter}</strong>
					</div>
				</div>
			</li>
		);
	}
}

export default CardListItem;