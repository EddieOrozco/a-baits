import React, { Component } from 'react';
import Item from './Item';
import ImageTitle from '../image-title/ImageTitle';

import './Items.scss';

class BaitItems extends Component {
  state = {
    baitItems: [
      {
        title: 'Gary Yamamoto',
        imageUrl: 'images/lure-1.png',
        id: 1,
        linkUrl: '/bait',
        price: '$5.00',
        price_two: '- $8.50',
      },
      {
        title: 'Yum',
        imageUrl: 'images/lure-2.png',
        id: 2,
        linkUrl: '/rodsReels',
        price: '$4.50',
        price_two: null,
      },
      {
        title: 'Rage Swimmers',
        imageUrl: 'images/lure-3.png',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '',
        price_two: '',
      },
      {
        title: "Kalin's",
        imageUrl: 'images/lure-4.png',
        id: 4,
        linkUrl: '/terminalTackle',
        price: '$5.50',
        price_two: null,
      },

      {
        title: 'Powerbait',
        imageUrl: 'images/lure-10.png',
        id: 6,
        linkUrl: '/terminalTackle',
        price: null,
        price_two: null,
      },
      {
        title: 'Booyah',
        imageUrl: 'images/lure-24.png',
        id: 20,
        linkUrl: '/terminalTackle',
        price: '$3.00',
        price_two: null,
      },
      {
        title: 'rebel',
        imageUrl: 'images/lure.png',
        id: 22,
        linkUrl: '/terminalTackle',
        price: '$6.99',
        price_two: null,
      },
      {
        title: 'Bulk lures',
        imageUrl: 'images/fakebait_bulk.png',
        id: 24,
        linkUrl: '/terminalTackle',
        price: '',
        price_two: null,
      },
      {
        title: 'Green spoon',
        imageUrl: 'images/spoons-1.png',
        id: 25,
        linkUrl: '/terminalTackle',
        price: '$2.00',
        price_two: null,
      },
      {
        title: 'Red White big Spoon',
        imageUrl: 'images/spoons-2.png',
        id: 26,
        linkUrl: '/terminalTackle',
        price: '$8.00',
        price_two: null,
      },
      {
        title: 'Black Spoon',
        imageUrl: 'images/spoons-4.png',
        id: 28,
        linkUrl: '/terminalTackle',
        price: '$1.50',
        price_two: null,
      },
    ],
  };

  render() {
    let imageTitle = 'Bait';
    return (
      <div className='item-section'>
        {/* <ImageTitle imageTitle={imageTitle} /> */}
        <div className='container'>
          <div className='item-title'>Plastic Bait and Lures</div>
          <div className='row'>
            {this.state.baitItems.map(({ id, ...otherItemProps }) => (
              <Item key={id} {...otherItemProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BaitItems;
