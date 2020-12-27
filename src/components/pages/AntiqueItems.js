import React, { Component } from 'react';
import Item from './Item';
import ImageTitle from '../image-title/ImageTitle';

import './Items.scss';

class AntiqueItems extends Component {
  state = {
    woodAntiqueItems: [
      {
        title: 'Flatfish Large (1931)',
        imageUrl: 'images/anti_33.jpeg',
        id: 1,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Musky Vamp (1925)',
        imageUrl: 'images/anti_2.jpeg',
        id: 2,
        linkUrl: '/rodsReels',
        description: '',
      },
      {
        title: 'Dowagiac (1920)',
        imageUrl: 'images/anti_6.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Gree  Minnow',
        imageUrl: 'images/anti_8.jpeg',
        id: 4,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Globe',
        imageUrl: 'images/anti_10.jpeg',
        id: 5,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Grasshopper',
        imageUrl: 'images/anti_16.jpeg',
        id: 6,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Flatfish Small (1931)',
        imageUrl: 'images/anti_35.jpeg',
        id: 7,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Crawler',
        imageUrl: 'images/anti_4.jpeg',
        id: 8,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Pikie',
        imageUrl: 'images/anti_1.jpeg',
        id: 9,
        linkUrl: '/terminalTackle',
        description: 'Pikie',
      },
      {
        title: 'Plunker',
        imageUrl: 'images/anti_13.jpeg',
        id: 10,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Crazy Crawler (1940)',
        imageUrl: 'images/anti_14.jpeg',
        id: 11,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Plunker (1927)',
        imageUrl: 'images/anti_18.jpeg',
        id: 12,
        linkUrl: '/terminalTackle',
        description: 'Plunker',
      },
      {
        title: 'Pikie',
        imageUrl: 'images/anti_21.jpeg',
        id: 13,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Wide Eye Minnow',
        imageUrl: 'images/anti_22.jpeg',
        id: 14,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Oreno',
        imageUrl: 'images/anti_23.jpeg',
        id: 15,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Sure-Strike (1928)',
        imageUrl: 'images/anti_26.jpeg',
        id: 16,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Globe',
        imageUrl: 'images/anti_27.jpeg',
        id: 17,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Husky Pikie (1920)',
        imageUrl: 'images/anti_28.jpeg',
        id: 18,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Flap Jack',
        imageUrl: 'images/anti_29.jpeg',
        id: 19,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/anti_30.jpeg',
        id: 20,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/anti_36.jpeg',
        id: 21,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Flap Jack',
        imageUrl: 'images/anti_37.jpeg',
        id: 22,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Mouse',
        imageUrl: 'images/anti_39.jpeg',
        id: 23,
        linkUrl: '/terminalTackle',
        description: '',
      },
    ],
    plasticAntiqueItems: [
      {
        title: 'River Runt',
        imageUrl: 'images/classic_plastic_1.jpeg',
        id: 24,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_23.jpeg',
        id: 25,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_3.jpeg',
        id: 26,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_4.jpeg',
        id: 27,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Lazy Ike-2',
        imageUrl: 'images/classic_plastic_5.jpeg',
        id: 28,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_6.jpeg',
        id: 29,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_7.jpeg',
        id: 30,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Sonic',
        imageUrl: 'images/classic_plastic_8.jpeg',
        id: 31,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Skip-N-Cisco',
        imageUrl: 'images/classic_plastic_9.jpeg',
        id: 32,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_10.jpeg',
        id: 33,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_11.jpeg',
        id: 34,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_12.jpeg',
        id: 35,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Hula Hoople',
        imageUrl: 'images/classic_plastic_13.jpeg',
        id: 36,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_14.jpeg',
        id: 37,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_15.jpeg',
        id: 38,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_17.jpeg',
        id: 39,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_18.jpeg',
        id: 40,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_19.jpeg',
        id: 41,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_20.jpeg',
        id: 42,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_21.jpeg',
        id: 43,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_22.jpeg',
        id: 44,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Arbo-Gaster',
        imageUrl: 'images/classic_plastic_24.jpeg',
        id: 45,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_25.jpeg',
        id: 46,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_26.jpeg',
        id: 47,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Double spinner',
        imageUrl: 'images/classic_plastic_27.jpeg',
        id: 48,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'unknown',
        imageUrl: 'images/classic_plastic_28.jpeg',
        id: 49,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'plunker',
        imageUrl: 'images/classic_plastic_29.jpeg',
        id: 50,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'unknown',
        imageUrl: 'images/classic_plastic_30.jpeg',
        id: 51,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'unknown',
        imageUrl: 'images/classic_plastic_31.jpeg',
        id: 52,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_32.jpeg',
        id: 53,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'unknown',
        imageUrl: 'images/classic_plastic_33.jpeg',
        id: 54,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_34.jpeg',
        id: 55,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_35.jpeg',
        id: 56,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'River Runt',
        imageUrl: 'images/classic_plastic_36.jpeg',
        id: 57,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Minnow',
        imageUrl: 'images/classic_plastic_37.jpeg',
        id: 58,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Double Spinner',
        imageUrl: 'images/classic_plastic_38.jpeg',
        id: 59,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Unknown',
        imageUrl: 'images/classic_plastic_39.jpeg',
        id: 60,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Spoon',
        imageUrl: 'images/classic_plastic_40.jpeg',
        id: 61,
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
