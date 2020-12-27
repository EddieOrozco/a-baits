import React, { Component } from 'react';
import Card from './Card';

import './Cards.scss';

class Cards extends Component {
  state = {
    cards: [
      {
        title: 'Lures',
        imageUrl: 'images/lure-4.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Rods & Reels',
        imageUrl: 'images/reel_1.jpeg',
        id: 2,
        linkUrl: '/gear',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Antiques',
        imageUrl: 'images/anti_34.jpeg',
        id: 3,
        linkUrl: '/antiques',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
    ],
  };

  render() {
    return (
      <section className='cards-section'>
        <div className='container'>
          <div className='cards-title'>Check this Stuff out</div>
          <div class='row '>
            {this.state.cards.map(({ id, ...otherCardProps }) => (
              <Card key={id} {...otherCardProps} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
