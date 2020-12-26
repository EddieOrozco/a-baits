import React, { Component } from 'react';
import Item from './Item';
import ImageTitle from '../image-title/ImageTitle';

import './Items.scss';

class BaitItems extends Component {
  state = {
    baitItems: [
      {
        title: 'Gary Yamamoto',
        imageUrl: 'images/lure-1.jpeg',
        id: 1,
        linkUrl: '/bait',
        price: '$5.00',
        price_two: '- $8.50',
      },
      {
        title: 'Yum',
        imageUrl: 'images/lure-2.jpeg',
        id: 2,
        linkUrl: '/rodsReels',
        price: '$4.50',
        price_two: null,
      },
      {
        title: 'Rage Swimmers',
        imageUrl: 'images/lure-3.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '',
        price_two: '',
      },
      {
        title: "Kalin's",
        imageUrl: 'images/lure-4.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$5.50',
        price_two: null,
      },
      {
        title: 'Bobby Garland',
        imageUrl: 'images/lure-8.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$3.99',
        price_two: null,
      },
      {
        title: 'Powerbait',
        imageUrl: 'images/lure-10.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: null,
        price_two: null,
      },
      {
        title: 'Lures under 5',
        imageUrl: 'images/lure-11.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$3.00',
        price_two: null,
      },
      {
        title: 'All Type of lures',
        imageUrl: 'images/lure-12.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$3.00',
        price_two: 'and up',
      },
      {
        title: 'River2sea',
        imageUrl: 'images/lure-13.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$16.00',
        price_two: '- $21.00',
      },
      {
        title: 'Bears Tandem Spinner',
        imageUrl: 'images/lure-14.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$5.00',
        price_two: null,
      },
      {
        title: 'Bears in-line spinner',
        imageUrl: 'images/lure-15.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$5.00',
        price_two: '$8.50',
      },
      {
        title: 'Other Lures',
        imageUrl: 'images/lure-16.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$3.99 and up',
        price_two: null,
      },
      {
        title: 'Rigs',
        imageUrl: 'images/lure-17.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$2.50',
        price_two: '- $5.00',
      },
      {
        title: 'Storm wild eye',
        imageUrl: 'images/lure-18.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$3.99',
        price_two: null,
      },
      {
        title: 'Lures',
        imageUrl: 'images/lure-19.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$2.00',
        price_two: '- $10.00',
      },
      {
        title: 'A-Baits',
        imageUrl: 'images/lure-20.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$2.50',
        price_two: '- $8.50',
      },
      {
        title: 'Voodoo',
        imageUrl: 'images/lure-21.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$1.00',
        price_two: null,
      },
      {
        title: 'big lures',
        imageUrl: 'images/lure-22.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '$20.00 and up',
        price_two: null,
      },
      {
        title: 'Blue Fox',
        imageUrl: 'images/lure-23.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        price: '13.99',
        price_two: null,
      },
    ],
  };

  render() {
    let imageTitle = 'Bait';
    return (
      <div className='item-section'>
        <ImageTitle imageTitle={imageTitle} />
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
