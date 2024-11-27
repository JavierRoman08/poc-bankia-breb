import styles from "./custom.button.module.scss";

interface ButtonProps {
  label: string;
  onClickFn: any;
  isEnabled: boolean;
  className?: string;
}

const CustomButtonComponent = ({ label, onClickFn, isEnabled, className }: ButtonProps) => {
  return (
    <button className={`align-center ${styles.btn} ${className} ${isEnabled ? styles.btnEnabled : styles.btnDisabled}`} onClick={onClickFn}>
      {label}
    </button>
  );
};

export default CustomButtonComponent;
