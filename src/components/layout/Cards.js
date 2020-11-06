import React from 'react';

const Cards = () => {
  return (
    <div className='container' style={{ padding: '100px 0' }}>
      <div class='row '>
        <div class='col-4'>
          <div class='card' style={{ width: '22rem' }}>
            <img
              className='card-img-top'
              src='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.h_J9C9bMNSQlrwCdrdUT-AHaGI%26pid%3DApi&f=1'
              alt='Card image cap'
            />
            <div class='card-body'>
              <h5 class='card-title'>Tackle</h5>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                View
              </a>
            </div>
          </div>
        </div>
        <div class='col-4'>
          <div class='card' style={{ width: '22rem' }}>
            <img
              className='card-img-top'
              src='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.h_J9C9bMNSQlrwCdrdUT-AHaGI%26pid%3DApi&f=1'
              alt='Card image cap'
            />
            <div class='card-body'>
              <h5 class='card-title'>Rod & Reels</h5>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                View
              </a>
            </div>
          </div>
        </div>
        <div class='col-4'>
          <div class='card' style={{ width: '22rem' }}>
            <img
              className='card-img-top'
              src='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.h_J9C9bMNSQlrwCdrdUT-AHaGI%26pid%3DApi&f=1'
              alt='Card image cap'
            />
            <div class='card-body'>
              <a href='#'>
                <h5 class='card-title'>Live Bait</h5>
              </a>

              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' class='btn btn-primary'>
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
