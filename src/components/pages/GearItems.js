import React, { Component } from 'react';
import Item from './Item';
import ImageTitle from '../image-title/ImageTitle';

import './Items.scss';

class GearItems extends Component {
  state = {
    gearItems: [
      {
        title: "Lew's Fluoro",
        imageUrl: 'images/line-3.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Stren Mono',
        imageUrl: 'images/line-7.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Trilene',
        imageUrl: 'images/line-8.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Zebco Reel',
        imageUrl: 'images/reel-1.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Spinning Reel',
        imageUrl: 'images/reel-2.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: '606 reel',
        imageUrl: 'images/reel-5.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Gold Hooks',
        imageUrl: 'images/hooks-1.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Red Hooks',
        imageUrl: 'images/hooks.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Black Hooks',
        imageUrl: 'images/hooks-3.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Silver Leaf',
        imageUrl: 'images/leaf-4.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Gold Leaf',
        imageUrl: 'images/leaf-12.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Live Bait Container',
        imageUrl: 'images/bucket.png',
        id: 1,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Grease',
        imageUrl: 'images/grease.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'PLine ',
        imageUrl: 'images/line-1.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'J.T',
        imageUrl: 'images/line-2.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'All Color Skirts',
        imageUrl: 'images/skirt-1.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Multiple Colors',
        imageUrl: 'images/color-1.png',
        id: 2,
        linkUrl: '/terminalTackle',
        description: '',
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
