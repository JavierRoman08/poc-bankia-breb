import { useEffect, useRef, useState } from "react";
import styles from "./key.card.module.scss";
import { ChevronDown, ChevronUp, Edit, EyeOff, Share2, Trash } from "react-feather";
import KeyType from "../key-type/key.type";
import { SwitchField } from "@aws-amplify/ui-react";
import Spacer from "@/components/atoms/spacer/spacer";
import Option from "@/components/atoms/option/option";

interface KeyCardProps {
  icon: any;
  title: string;
  label: string;
  onBlockFn: any;
  onShareFn?: any;
  onEditFn?: any;
  isActive?: boolean;
}

const KeyCard = ({
  icon,
  title,
  label,
  onBlockFn,
  onShareFn,
  onEditFn,
  isActive,
}: KeyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startX, setStartX] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [widthRoot, setWidthRoot] = useState(0);
  const itemRef = useRef(null)
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX)
  };

  const handleMouseMove = (e) => {
    if(startX !== null){
      const currentX = e.clientX;
      const deltaX = currentX - startX;
      const deltaXPercentage = Math.ceil((deltaX / widthRoot) * 100)

      setTranslateX(deltaXPercentage)
      const limitedTranslateX = Math.min(Math.max(deltaXPercentage, -30), 0)
      setTranslateX(limitedTranslateX)
    }
  };

  const handleMouseUp = () => {
    if (translateX <= -15){
      setTranslateX(-30)
    } else {
      setTranslateX(0)
    }
    setStartX(null)
  };

  useEffect(() => {
    function getWithOfItem(){
      const itemRefRect = itemRef.current.getBoundingClientRect()
      const { width } = itemRefRect
      setWidthRoot(width)
    }

    getWithOfItem()
  }, [])

  return (
    <div ref={itemRef} className={styles.container}>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className={`${styles.card} ${!isActive ? styles.disabled : ""}`}
        style={{ transform: `translateX(${translateX}%)`, transition: '0.3s ease' }}
      >
        <div className="row align-center">
          <KeyType
            icon={icon}
            optionIcon={undefined}
            title={title}
            label={label}
            onClickFn={undefined}
          />
          <SwitchField
            fontSize={14}
            label={isActive ? "Bloquear" : "Activar"}
            isChecked={isActive}
            onChange={onBlockFn}
            trackCheckedColor={"#00BD81"}
            className={styles.switch}
          />
        </div>
        <div className={styles.card__content}>
          <p>CC 1203912313</p>
          <div
            className={`${styles.content} ${isExpanded ? styles.expanded : ""}`}
          >
            <Spacer height={10} />
            <h2 className="tiny">Cuenta asociada</h2>
            <p>BankIA</p>
            <div className="row">
              <span>Ahorros 213********</span>
              <Option icon={<EyeOff size={15} />} label={"Ver"} />
            </div>
            <h2 className="tiny">Estado</h2>
            <p>Apagado</p>
            <h2 className="tiny">Fecha de inscripcion</h2>
            <p>12 / Agosto / 2024</p>
            <Option
              icon={<Edit size={15} />}
              label={"Editar"}
              onClickFn={onEditFn}
            />
          </div>
          <hr />
          <div className={styles.dropdown}>
            <div className="row">
              <Option
                icon={<Share2 size={15} />}
                label={"Compartir"}
                onClickFn={onShareFn}
              />
            </div>
            {isExpanded ? (
              <ChevronUp onClick={toggleExpand} />
            ) : (
              <ChevronDown onClick={toggleExpand} />
            )}
          </div>
        </div>
      </div>
      <button className={`${styles.buttonDelete} row align-center gap bold`} onClick={()=> console.log('daksdk')}>Eliminar <Trash /></button>
    </div>
  );
};

export default KeyCard;
