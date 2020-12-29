import React, { Component } from 'react';
import Item from './Item';
import ImageTitle from '../image-title/ImageTitle';

import './Items.scss';

class GearItems extends Component {
  state = {
    gearItems: [
      {
        title: 'Custom Spinner',
        imageUrl: 'images/spinner.jpeg',
        id: 1,
        linkUrl: '/terminalTackle',
        description: 'Ask me about my custom spinners',
      },
      {
        title: 'All Color Skirts',
        imageUrl: 'images/skirt-1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Multiple Colors',
        imageUrl: 'images/color-1.jpeg',
        id: 2,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Custom Leafs',
        imageUrl: 'images/stringer.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Live Bait Container',
        imageUrl: 'images/bucket.jpeg',
        id: 1,
        linkUrl: '/bait',
        description: '',
      },
      {
        title: 'Gold Hooks',
        imageUrl: 'images/hooks-1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Custom Hooks',
        imageUrl: 'images/hooks-2.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'All Type Rods',
        imageUrl: 'images/rod.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Red Hooks',
        imageUrl: 'images/hooks.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Black Hooks',
        imageUrl: 'images/hooks-3.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Grease',
        imageUrl: 'images/grease.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Orange Color',
        imageUrl: 'images/color-2.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Chartreuse Color',
        imageUrl: 'images/color-3.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'White Color',
        imageUrl: 'images/color-4.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Silver Color',
        imageUrl: 'images/color-5.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Black color',
        imageUrl: 'images/color-6.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'blue color',
        imageUrl: 'images/color-7.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'red color',
        imageUrl: 'images/color-8.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'green color',
        imageUrl: 'images/color-9.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Bobbers',
        imageUrl: 'images/bobber.jpeg',
        id: 2,
        linkUrl: '/rodsReels',
        description: '',
      },
      {
        title: 'Buck Tail',
        imageUrl: 'images/bucktail.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Terminal Tackle Box',
        imageUrl: 'images/box.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Chatter Clips',
        imageUrl: 'images/chatter-clip.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Ice Reel',
        imageUrl: 'images/ice_reel.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Fishing Clock',
        imageUrl: 'images/clock.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Silver Leaf',
        imageUrl: 'images/leaf-4.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Gold Leaf',
        imageUrl: 'images/leaf-12.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'All Type Leaf',
        imageUrl: 'images/leaf-20.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Multi color leaf',
        imageUrl: 'images/leaf-22.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Black Leaf',
        imageUrl: 'images/leaf-23.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Chartreuse leaf ',
        imageUrl: 'images/leaf-24.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Blue Flake leaf',
        imageUrl: 'images/leaf-26.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Colorado Gold Leaf',
        imageUrl: 'images/leaf-30.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'All Leaf',
        imageUrl: 'images/leaf-32.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'PLine ',
        imageUrl: 'images/line-1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'J.T',
        imageUrl: 'images/line-2.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: "Lew's Fluoro",
        imageUrl: 'images/line-3.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'sufix',
        imageUrl: 'images/line-6.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Stren Mono',
        imageUrl: 'images/line-7.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Trilene',
        imageUrl: 'images/line-8.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Big Net',
        imageUrl: 'images/net-1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Bobber Net',
        imageUrl: 'images/net.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Zebco Reel',
        imageUrl: 'images/ree-1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Spinning Reel',
        imageUrl: 'images/reel-1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Spinning Reel',
        imageUrl: 'images/reel-2.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'spinning reel',
        imageUrl: 'images/reel-3.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'pflueger',
        imageUrl: 'images/reel-4.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: '606 reel',
        imageUrl: 'images/reel-5.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Zebco 202 Reel',
        imageUrl: 'images/reel-6.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Zebco Reel',
        imageUrl: 'images/reel-7.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Spinning Reel',
        imageUrl: 'images/reel.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Pyramid Sinkers',
        imageUrl: 'images/weights.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Non Snag Sinkers',
        imageUrl: 'images/weights-1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'All Type Sinkers',
        imageUrl: 'images/weights-2.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'No roll Sinker',
        imageUrl: 'images/weights-3.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Egg Sinker',
        imageUrl: 'images/sinker_2.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Non Snag Sinker',
        imageUrl: 'images/sinker_3.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Rubber Core Sinker',
        imageUrl: 'images/sinker_4.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'Bank Sinker',
        imageUrl: 'images/sinker.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'No Roll Sinker',
        imageUrl: 'images/sinker_1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Bulk Skirts ',
        imageUrl: 'images/skirt-bulk.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },
      {
        title: 'All Type Skirts',
        imageUrl: 'images/skirt-bulk1.jpeg',
        id: 3,
        linkUrl: '/terminalTackle',
        description: '',
      },

      {
        title: 'Custom Lures ',
        imageUrl: 'images/spinner-1.jpeg',
        id: 3,
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
