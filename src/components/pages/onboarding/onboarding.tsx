import { useNavigate } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";
import styles from "./onboarding.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { ChevronLeft } from "react-feather";

const OnBoarding = () => {
  const history = useNavigate();

  const goToHome = () => {
    history("/home");
  };

  const goToBreb = () => {
    history("/home/bre-b");
  };

  return (
    <section className={`${styles.container}`}>
      <nav className={`${styles.navbar}`}>
        <ChevronLeft className={styles.arrow} size={30} onClick={goToHome} />
        <button className="link bold" onClick={goToBreb}>Omitir</button>
      </nav>
      <Spacer height={80} />
      <div>
        <h1 className="subtitle">Bienvenido a</h1>
        <img
          src="/bre-b-icon.svg"
          alt="logo_bre_b"
          className="row align-center"
        />
      </div>
      <Spacer />
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        <img
          src="/stepbg.svg"
          alt="request_check"
          className={styles.stepBackground}
        />
        <SwiperSlide>
          <div className={styles.content}>
            <section className={styles.content__animation}>
              <img
                src="/step1.svg"
                alt="request_check"
                className={styles.step}
              />
              <Spacer />
              <h2 className="subtitle">Pagos rápidos y seguros</h2>
              <Spacer />
              <p className="tiny">
                Realiza o recibe pagos de manera instantánea, desde y hacia
                cualquier banco. No importa el día y la hora.
              </p>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.content}>
            <section className={styles.content__animation}>
              <img
                src="/step2.svg"
                alt="request_check"
                className={styles.step}
              />
              <Spacer />
              <h2 className="subtitle">Pagos rápidos y seguros</h2>
              <Spacer />
              <p className="tiny">
                Realiza o recibe pagos de manera instantánea, desde y hacia
                cualquier banco. No importa el día y la hora.
              </p>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.content}>
            <section className={styles.content__animation}>
              <img
                src="/step3.svg"
                alt="request_check"
                className={styles.step}
              />
              <Spacer />
              <h2 className="subtitle">Pagos rápidos y seguros</h2>
              <Spacer />
              <p className="tiny">
                Realiza o recibe pagos de manera instantánea, desde y hacia
                cualquier banco. No importa el día y la hora.
              </p>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
      <Button className={`${styles.stepButton} row align-center btn-enabled`} onClick={goToBreb}>
        Continuar
      </Button>
    </section>
  );
};

export default OnBoarding;
