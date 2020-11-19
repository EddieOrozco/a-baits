import React from 'react';

import ImageTitle from '../image-title/ImageTitle';

const About = () => {
  let imageTitle = 'About';
  return (
    <div className='main'>
      <ImageTitle imageTitle={imageTitle} />
      <div className='container'>
        <h1 className='linksTitle'>A Chicago fishing institution</h1>
        <div class='row about-description'>
          <div class='col'>
            <p>
              Our family-run business has been serving--and helping
              build--Chicago’s fishing community since 1951. Although we are no
              longer in the location pictured above (our second, across from
              where McCormick Place Hilton sits today), we are still Chicago’s
              widest selection of high-quality live and frozen baits. At
              Henry’s, we aren’t afraid to show you our bait; in fact, we
              guarantee that all bait will be opened and checked by our staff
              when you buy it. If we wouldn’t fish with it, we wouldn’t ask you
              to, either.
            </p>
          </div>
          <div class='col'>
            <p>
              Our family-run business has been serving--and helping
              build--Chicago’s fishing community since 1951. Although we are no
              longer in the location pictured above (our second, across from
              where McCormick Place Hilton sits today), we are still Chicago’s
              widest selection of high-quality live and frozen baits. At
              Henry’s, we aren’t afraid to show you our bait; in fact, we
              guarantee that all bait will be opened and checked by our staff
              when you buy it. If we wouldn’t fish with it, we wouldn’t ask you
              to, either.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
