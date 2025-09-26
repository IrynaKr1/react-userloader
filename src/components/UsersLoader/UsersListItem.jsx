import React from 'react';
import '../../reset.css';
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
      <div className={styles.container}>
        <div className={styles.mainUserData}>
          <div className={styles.imageContainer}>
            <img src={medium} alt={`${first} ${last}`} />
          </div>
          <h2 className={styles.userName}>
            {first} {last}
          </h2>
          <h3 className={styles.userTitle}>{username}</h3>
        </div>
        <div className='adressUserData'>
          <p>{cell}</p>
          <p className={styles.userEmail}>{email}</p>
          <p>{country}</p>
          <p>{`${number} ${name}, ${city}, ${state}`}</p>
        </div>
      </div>
    </li>
  );
}

export default UsersListItem;
