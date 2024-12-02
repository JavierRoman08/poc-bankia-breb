import { ChevronRight } from "react-feather";
import styles from "./card.prompt.module.scss";

interface CardPromptProps {
  id: number;
  children: any;
  onClickFn: any;
  classNames?: string;
}

const CardPrompt = ({id, children, onClickFn, classNames}: CardPromptProps) => {
  return (
    <button key={id} className={`${styles.cardPromptContainer} row justify-between ${classNames}`} onClick={onClickFn}>
      <div>{children}</div>
      <ChevronRight />
    </button>
  );
};

export default CardPrompt;
