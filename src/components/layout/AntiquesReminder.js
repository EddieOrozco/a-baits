import React from 'react';

const AntiquesReminder = () => {
  return (
    <div
      class='jumbotron jumbotron-fluid'
      style={{
        background: '#fff',
        textAlign: 'center',
        backgroundImage: `url('//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2F89%2Ffd%2F6c89fdfa47e98c5f426dcd005bf88b26.jpg&f=1&nofb=1')`,
        backgroundRepeat: ' no-repeat',
        width: '100%',
        backgroundSize: '100% 100%',
        height: '450px',
        marginBottom: '6rem',
      }}
    >
      <div class='container'>
        <h1
          class='display-4'
          style={{
            paddingTop: '100px',
          }}
        >
          Antiques
        </h1>
        <p class='lead'>
          Don't Forget to Check out our Antique Page you might find a classic
          piece.
        </p>
      </div>
    </div>
  );
};

export default AntiquesReminder;
