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
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Musky Vamp (1925)',
        imageUrl: 'images/anti_2.jpeg',
        id: 2,
        linkUrl: '/rodsReels',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Dowagiac (1920)',
        imageUrl: 'images/anti_6.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Gree  Minnow',
        imageUrl: 'images/anti_8.jpeg',
        id: 4,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Globe',
        imageUrl: 'images/anti_10.jpeg',
        id: 5,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Grasshopper',
        imageUrl: 'images/anti_16.jpeg',
        id: 6,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Flatfish Small (1931)',
        imageUrl: 'images/anti_35.jpeg',
        id: 7,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Crawler',
        imageUrl: 'images/anti_4.jpeg',
        id: 8,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
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
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Crazy Crawler (1940)',
        imageUrl: 'images/anti_14.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Plunker (1927)',
        imageUrl: 'images/anti_18.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: 'Plunker',
      },
      {
        title: 'Pikie',
        imageUrl: 'images/anti_21.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Wide Eye Minnow',
        imageUrl: 'images/anti_22.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Oreno',
        imageUrl: 'images/anti_23.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Sure-Strike (1928)',
        imageUrl: 'images/anti_26.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Globe',
        imageUrl: 'images/anti_27.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Husky Pikie (1920)',
        imageUrl: 'images/anti_28.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Flap Jack',
        imageUrl: 'images/anti_29.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Minnow',
        imageUrl: 'images/anti_30.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Minnow',
        imageUrl: 'images/anti_36.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Flap Jack',
        imageUrl: 'images/anti_37.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'Mouse',
        imageUrl: 'images/anti_39.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
    ],
    plasticAntiqueItems: [
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_1.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_23.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_3.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_4.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_5.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_6.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_7.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_8.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_9.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_10.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_11.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_12.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_13.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_14.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_15.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_17.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_18.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_19.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_20.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_21.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_22.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_24.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_25.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_26.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_27.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_28.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_29.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_30.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_31.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_32.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_33.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_34.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_35.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_36.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_37.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_38.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_39.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
      },
      {
        title: 'HEADDON',
        imageUrl: 'images/classic_plastic_40.jpeg',
        id: 1,
        linkUrl: '/bait',
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content",
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
