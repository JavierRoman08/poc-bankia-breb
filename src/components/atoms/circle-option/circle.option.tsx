import styles from "./circle.option.module.scss";

interface CircleOptionProps {
  icon?: any;
  imageUrl?: string;
  label: string;
  onClickFn?: any;
  className?: any;
}

const CircleOption = ({ icon, imageUrl, label, onClickFn, className }: CircleOptionProps) => {
  return (
    <button className={`${styles.option} ${className}`} onClick={onClickFn}>
      <div className={styles.option__icon}>
        { icon ?? <img src={imageUrl} alt="image_icon_logo" /> }
      </div>
      <span className="body">{label}</span>
    </button>
  );
};

export default CircleOption;
