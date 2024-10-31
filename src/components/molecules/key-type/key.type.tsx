import styles from './key.type.module.scss';
import Option from '@/components/atoms/option/option';

interface KeyTypeProps {
    icon: any;
    optionIcon: any;
    title: string;
    label: string;
    onClickFn: any;
}

const KeyType = ({ icon, optionIcon, title, label, onClickFn }: KeyTypeProps) => {
  
    return (
      <button className={`${styles.container} row align-center`} onClick={onClickFn}>
        <div>
            <div className={`${styles.icon} circle`}>
              {icon}
            </div>
            <h1 className={`${styles.title} tiny`}>{title}</h1>
        </div>
        <Option icon={optionIcon} label={label} />
      </button>
    );
  };
  
export default KeyType
