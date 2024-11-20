import { slImage } from '@/app/lib/placeholder-data';
import Image from 'next/image';
import styles from '@/app/utils/slide.module.css';

const brands = [ ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage, ...slImage];

export default function Slide() {
  return (
    <>

      <div className={`${styles.slideFlex} ${styles.slideSlip}`}>
        {brands.map((brand) => {
          return (
            <Image className="m-8"
              key={brand.name}
              src={brand.url}
              width={150}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>
      <div className={`${styles.slideFlex} ${styles.slideSlipSlow}`}>
        {brands.map((brand) => {
          return (
            <Image className="m-8"
              key={brand.name}
              src={brand.url}
              width={150}
              height={2}
              alt={`${brand.name} image`}
            />
          );
        })}
      </div>


    </>
  );
}
