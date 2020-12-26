import React from 'react';

import ImageTitle from '../image-title/ImageTitle';
import './About.scss';

const About = () => {
  let imageTitle = 'About';
  return (
    <div className='main'>
      {/* <ImageTitle imageTitle={imageTitle} /> */}
      <div className='container'>
        <h1 className='linksTitle'>A-Baits in busness for over 30 years.</h1>
        <div class='row about-description'>
          <div class='col'>
            <p>
              Hi, I am Charles Moffalt, a fellow Army veteran and the owner and
              operator of A-Baits. A fishing tackle and live bait shop. I have
              operated in Lockport IL, for over 30 years since 1990. We make
              custom lures such as buzz baits, spinner baits, chatter bait,
              sinkers, snagging hooks, walleye rigs and more. We also sell items
              in bulk just incase your interested in making your own lures. I am
              highly invested in my shop, fishing and the most important of all
              my customers. I am willing to give out free lessons to those who
              are interested in learning about making lures.
            </p>
          </div>
          <div class='col'>
            <p>
              I also carry antique lures for those interested in having a bit of
              history in their tackle box. My live bait includes minnows, worms,
              leaches if the season is right and other live baits. I can special
              order anything needed for your fishing adventure. If you have any
              question feel free to reach me at 779-230-8115. You can also catch
              me on Facebook just look us up A-Bait in Lockport. Thank you! To
              all my customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
