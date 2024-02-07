import React from 'react';

const Greeting = () => {
  const prenom = 'k';

  return (
    <div>
      <h2>Bonjour{prenom ? `, ${prenom} !` : ', Hello, there!'}</h2>
      {prenom && <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="Votre image" />}
    </div>
  );
}

export default Greeting;