import styles from "./option.module.scss";

interface OptionProps {
  icon: any;
  label: string;
  onClickFn?: any;
}

const Option = ({ icon, label, onClickFn }: OptionProps) => {
  return (
    <button className={`${styles.option} row`} onClick={onClickFn}>
      <span className="tiny">{label}</span>
      <i className={`${styles.icon} row circle`}>
        {icon}
      </i>
    </button>
  );
};

export default Option;
