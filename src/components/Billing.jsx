
import { Appstore, BillingImg, Google } from "../assets/images";
import { layout, styles } from "../util/style";

const Billing = () => {
  return (
    <section
      id="features"
      className={`${layout.sectionReverse} items-center relative mt-5`}
    >
      <div className={`${layout.sectionImgReverse} `}>
        <img
          src={BillingImg}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5] rounded-3xl"
        />

        <div className="absolute z-[3] -left-1/2 w-[50%] h-[50%] rounded-full top-16 white__gradient" />
        <div className="absolute z-[0] w-[50%] left-1/2 h-[55%] bottom-0 rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionIfo}>
        <h2 className={styles.heading2}>
          Hisob kitob va fakturial <br className="sm:block hidden" /> osongina
          boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          minima dignissimos aut laudantium consectetur, fugiat saepe debitis
          possimus fuga animi?
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={Google}
            alt="google"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={Appstore}
            alt="appstore"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;