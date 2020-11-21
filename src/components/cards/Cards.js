import React, { Component } from 'react';
import Card from './Card';

import './Cards.scss';

class Cards extends Component {
  state = {
    cards: [
      {
        title: 'Live Bait',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Rods & Reels',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 2,
        linkUrl: '/rodsReels',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Terminal Tackle',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 3,
        linkUrl: '/terminalTackle',
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
