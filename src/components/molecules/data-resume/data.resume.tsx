import { ChevronRight } from "react-feather";
import styles from "./data.resume.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";

interface DataResumeProps {
  icon?: any;
  imageUrl?: any;
  title: string;
  description: string;
  value: string;
  onClickFn?: any;
}

const DataResume = ({
  icon,
  imageUrl,
  title,
  description,
  value,
  onClickFn,
}: DataResumeProps) => {
  return (
    <div className={styles.container}>
      <div className="row gap">
        {imageUrl ? (
          <img src={imageUrl} alt="image_logo_product" />
        ) : (
          <div className={`${styles.icon} row circle`}>{icon}</div>
        )}
        <h3>{title}</h3>
      </div>
      <Spacer height={10} />
      <p>{description}</p>
      <div className={`${styles.change} row`}>
        <p className="bold">{value}</p>

        {onClickFn ? (
          <button className={`link row bold`} onClick={onClickFn}>
            <p>Cambiar</p>
            <ChevronRight />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DataResume;
