import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  state = {
    cards: [
      {
        title: 'Tackle',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 1,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Rod & Reels',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 2,
        linkUrl: '/rodsReels',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Live Bait',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 3,
        linkUrl: '/baits',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
    ],
  };

  render() {
    return (
      <div className='container' style={{ padding: '100px 0' }}>
        <div class='row '>
          {this.state.cards.map(({ id, ...otherCardProps }) => (
            <Card key={id} {...otherCardProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
