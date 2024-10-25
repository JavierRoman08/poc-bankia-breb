import { RefreshCcw } from 'react-feather';
import styles from './movement.module.scss';

interface MovementProps {
    date: string;
    amount: string;
    description: string;
    receiver: string;
    onClickFn: any;
}

const Movement = ({ date, amount, description, receiver, onClickFn }: MovementProps) => {
  
    return (
      <div className={`${styles.container} row align-center`}>
        <div className={`${styles.container__data}`}>
            <p>{date}</p>
            <span>{description}</span>
            <p>{receiver}</p>
        </div>
        <div className={`${styles.container__options}`}>
            <div className='row align-center gap'>
                <p>${amount}</p>
                <button onClick={onClickFn}>
                    <RefreshCcw  />
                </button>
            </div>
            <span className='tiny'>Solicitar devolucion</span>
        </div>
      </div>
    );
  };
  
export default Movement
