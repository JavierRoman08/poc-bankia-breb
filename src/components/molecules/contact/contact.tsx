import { Star, User } from 'react-feather';
import styles from './contact.module.scss';
import { useState } from 'react';

function Contact({name, accountNumber}: any) {
const [isFavorite, setIsFavorite] = useState(false)

const handleFavorite = () => {
    setIsFavorite(!isFavorite)   
}

  return (
    <div className={`${styles.contactItem} row`}>
        <div className={`${styles.contactItem__data} row gap`}>
            <User className={styles.userIcon}/>
            <div>
                <p>{name}</p>
                <p>{accountNumber}</p>
            </div>
        </div>
        <Star className={isFavorite ? styles.isFavorite : styles.icon} onClick={handleFavorite} />
    </div>
  )
}

export default Contact
