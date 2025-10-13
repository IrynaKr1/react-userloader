import '../../reset.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './UsersLoader.module.scss';
import getFlagEmoji from './flagUtils.js';

function UsersListItem(props) {
  const { user } = props;
  const {
    name: { first, last },
    picture: { medium },
    login: { username },
    cell,
    email,
    location: {
      street: { number, name },
      city,
      state,
      country,
    },
    nat,
  } = user;

  const flagEmoji = getFlagEmoji(nat);
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.mainUserData}>
          <div className={styles.imageContainer}>
            <img
              src={medium}
              alt={`${first} ${last}`}
              className={styles.mainImage}
            />
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
            <div className={styles.qrPlaceholder}>
              <img
                src='/src/assets/qrCode.png'
                alt='qr code'
                className={styles.qrImg}
              />
            </div>
          </div>
          <div className={styles.contactInfo}>
            <span>{flagEmoji}</span>
            <p className={`${styles.country} ${styles.contactInfoP}`}>
              {country}
            </p>
          </div>
          <div className={styles.contactInfo}>
            <FiMapPin className={styles.icon} />
            <p
              className={`${styles.address} ${styles.contactInfoP}`}
            >{`${number} ${name}, ${city}, ${state}`}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default UsersListItem;
