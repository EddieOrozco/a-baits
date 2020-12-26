import React, { Component } from 'react';
import Item from './Item';
import ImageTitle from '../image-title/ImageTitle';

import './Items.scss';

class GearItems extends Component {
  state = {
    gearItems: [
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
      {
        title: 'Terminal Tackle',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 3,
        linkUrl: '/terminalTackle',
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
      {
        title: 'Terminal Tackle',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 3,
        linkUrl: '/terminalTackle',
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
      {
        title: 'Terminal Tackle',
        imageUrl:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2-www.liveoutdoors.com%2Fassets%2Fuploads%2F2016%2F06%2Fbait-fish.jpg&f=1&nofb=1',
        id: 3,
        linkUrl: '/terminalTackle',
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
    let imageTitle = 'Gear';
    return (
      <div className='item-section'>
        {/* <ImageTitle imageTitle={imageTitle} /> */}
        <div className='container'>
          <div className='item-title'>Grab some gear</div>
          <div className='row'>
            {this.state.gearItems.map(({ id, ...otherItemProps }) => (
              <Item key={id} {...otherItemProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GearItems;
