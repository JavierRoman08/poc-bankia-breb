import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./modal.module.scss";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  handleModal: any;
  children: any;
}

const CustomModal = ({ isOpen, handleModal, children }: ModalProps) => {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.isOpen : styles.isClosed}`}>
      <div className={styles.modal__close}>
        <MdClose onClick={handleModal} size={25} />
      </div>
      <Spacer height={10} />
      {children}
      <Spacer height={20} />
    </div>
  );
};

export default CustomModal;