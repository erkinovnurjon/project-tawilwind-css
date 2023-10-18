
import { Card } from "../assets/images";
import { layout, styles } from "../util/style";
import Button from "./Button";

const Contract = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionIfo}>
        <h2 className={styles.heading2}>
          Bir necha oson <br className="sm:block hidden" /> qadamda kontrakt
          tuzish
        </h2>
        <p className={`${styles.paragraph} max-w-[620px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          natus tempore a iusto laborum dolorem alias repellendus veritatis
          corrupti optio!
        </p>
        
          <Button styles={" my-10 mr-[77%] "} />
       
      </div>
      <div className={layout.sectionImg}>
        <img src={Card} alt="card " className="w-[100%] h-[100%] rounded-3xl" />
      </div>
    </section>
  );
};

export default Contract;