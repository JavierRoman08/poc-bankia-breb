import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./modal.module.scss";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  handleModal: any;
  children: any;
}

const CustomModal = ({ isOpen, handleModal, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__close}>
        <MdClose onClick={handleModal} size={25} />
      </div>
      {children}
      <Spacer height={20} />
    </div>
  );
};

export default CustomModal;
