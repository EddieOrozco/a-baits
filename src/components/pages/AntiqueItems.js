import React, { Component } from 'react';
import Item from './Item';
import ImageTitle from '../image-title/ImageTitle';

import './Items.scss';

class AntiqueItems extends Component {
  state = {
    woodAntiqueItems: [
      {
        title: 'Flatfish Large (1931)',
        imageUrl: 'images/anti_33.png',
        id: 1,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Musky Vamp (1925)',
        imageUrl: 'images/anti_2.png',
        id: 2,
        linkUrl: '/rodsReels',
        description: '',
      },
      {
        title: 'Dowagiac (1920)',
        imageUrl: 'images/anti_6.png',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Gree  Minnow',
        imageUrl: 'images/anti_8.png',
        id: 4,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Grasshopper',
        imageUrl: 'images/anti_16.png',
        id: 6,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Flatfish Small (1931)',
        imageUrl: 'images/anti_35.png',
        id: 7,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Crawler',
        imageUrl: 'images/anti_4.png',
        id: 8,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Pikie',
        imageUrl: 'images/anti_1.png',
        id: 9,
        linkUrl: '/terminalTackle',
        description: 'Pikie',
      },
      {
        title: 'Plunker',
        imageUrl: 'images/anti_13.png',
        id: 10,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Crazy Crawler (1940)',
        imageUrl: 'images/anti_14.png',
        id: 11,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Plunker (1927)',
        imageUrl: 'images/anti_18.png',
        id: 12,
        linkUrl: '/terminalTackle',
        description: 'Plunker',
      },
      {
        title: 'Pikie',
        imageUrl: 'images/anti_21.png',
        id: 13,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Wide Eye Minnow',
        imageUrl: 'images/anti_22.png',
        id: 14,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Oreno',
        imageUrl: 'images/anti_23.png',
        id: 15,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Sure-Strike (1928)',
        imageUrl: 'images/anti_26.png',
        id: 16,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Globe',
        imageUrl: 'images/anti_27.png',
        id: 17,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Husky Pikie (1920)',
        imageUrl: 'images/anti_28.png',
        id: 18,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Flap Jack',
        imageUrl: 'images/anti_29.png',
        id: 19,
        linkUrl: '/terminalTackle',
        description: '',
      },
    ],
    plasticAntiqueItems: [
      {
        title: 'River Runt',
        imageUrl: 'images/classic_plastic_1.png',
        id: 24,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Lazy Ike-2',
        imageUrl: 'images/classic_plastic_5.png',
        id: 28,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_11.png',
        id: 34,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_12.png',
        id: 35,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Hula Hoople',
        imageUrl: 'images/classic_plastic_13.png',
        id: 36,
        linkUrl: '/bait',
        description: '',
      },

      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_19.png',
        id: 41,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Arbo-Gaster',
        imageUrl: 'images/classic_plastic_24.png',
        id: 45,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'plunker',
        imageUrl: 'images/classic_plastic_29.png',
        id: 50,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'unknown',
        imageUrl: 'images/classic_plastic_30.png',
        id: 51,
        linkUrl: '/bait',
        description: '',
      },
    ],
  };

  render() {
    let imageTitle = 'Antiques';
    return (
      <div className='item-section'>
        {/* <ImageTitle imageTitle={imageTitle} /> */}
        <div className='container'>
          <div className='item-title'>Wood Antiques</div>
          <div className='row'>
            {this.state.woodAntiqueItems.map(({ id, ...otherItemProps }) => (
              <Item key={id} {...otherItemProps} />
            ))}
          </div>
          <div className='item-title'>Plastic Antiques</div>
          <div className='row'>
            {this.state.plasticAntiqueItems.map(({ id, ...otherItemProps }) => (
              <Item key={id} {...otherItemProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AntiqueItems;
