import React from 'react';
import CardListItem from './CardListItem';

const CardList = (prop) => {

	const cardItem = prop.posts.map((post, i) => {
		return (
			<CardListItem 
				key={i} 
				card_item={post}/>
		);	
	});

	return (
		<ul>
			{cardItem}
		</ul>
	);
};

export default CardList;