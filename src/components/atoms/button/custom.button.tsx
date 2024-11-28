import styles from "./custom.button.module.scss";

interface ButtonProps {
  label: string;
  onClickFn: any;
  isEnabled: boolean;
  className?: string;
}

const CustomButtonComponent = ({ label, onClickFn, isEnabled, className }: ButtonProps) => {
  return (
    <button className={`align-center ${styles.btn} ${isEnabled ? styles.btnEnabled : styles.btnDisabled} ${className}`} onClick={onClickFn}>
      {label}
    </button>
  );
};

export default CustomButtonComponent;
