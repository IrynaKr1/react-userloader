import React from 'react';
import '../../reset.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
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
        <div className={styles.adressUserData}>
          <div className={styles.dataWithQr}>
            <div className={styles.phoneAndEmail}>
              <div className={styles.contactInfo}>
                <FiPhone className={styles.icon} />
                <p className={styles.phone}>{cell}</p>
              </div>
              <div className={styles.contactInfo}>
                <FiMail className={styles.icon} />
                <p className={styles.userEmail}>{email}</p>
              </div>
            </div>
            <div className={styles.qrPlaceholder}></div>
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.country}>{country}</p>
          </div>
          <div className={styles.contactInfo}>
            <FiMapPin className={styles.icon} />
            <p
              className={styles.address}
            >{`${number} ${name}, ${city}, ${state}`}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default UsersListItem;
