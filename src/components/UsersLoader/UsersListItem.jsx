import React from 'react';
import styles from './UsersLoader.module.scss';

function UsersListItem(props) {
  const { user } = props;
  const {
    name: { first, last },
    picture: { medium },
    login: { uuid, username },
    cell,
    email,
    location: {
      street: { number, name },
      city,
      state,
      country,
    },
  } = user;

  return (
    <li>
      <div className='imageContainer'>
        <img src={medium} alt={`${first} ${last}`} />
      </div>
      <h2>
        {first} {last}
      </h2>
      <h3>{username}</h3>
      <p>{cell}</p>
      <p className={styles.userEmail}>{email}</p>
      <p>{country}</p>
      <p>{`${number} ${name}, ${city}, ${state}`}</p>
    </li>
  );
}

export default UsersListItem;
