import LogoB from "@/ui-components/LogoB";
import styles from "./circle.option.module.scss";
import * as Icons from "react-feather";

interface CircleOptionProps {
  iconName?: keyof typeof Icons;
  description: string;
  onClickFn?: any;
}

const CircleOption = ({ iconName, description, onClickFn }: CircleOptionProps) => {
  const IconComponent = iconName ? Icons[iconName] : '';

  return (
    <button className={styles.option} onClick={onClickFn}>
      <div className={`${IconComponent ? styles.option__icon : styles.option__bre_b}`}>
        { IconComponent ? <IconComponent size={35} /> : <LogoB property1="Positive" /> }
      </div>
      <span className="body">{description}</span>
    </button>
  );
};

export default CircleOption;
