import styles from '@/styles/usedby.module.scss'
import Image from 'next/image'

const UsedBy = ({
  data,
  title,
}: {
  data: { src: string; alt: string }[]
  title: string
}) => {
  return (
    <section className={`${styles.usedBy} container-content`}>
      <h2 className={styles.usedBy__title}>{title}</h2>
      <div className={`${styles.usedBy__container} ${styles.marquee}`}>
        <div className={styles.usedBy__list}>
          {data?.length > 0 &&
            data.map((item) => (
              <div className={styles['usedBy__list-item']} key={item.src}>
                <Image src={item.src} alt={item.alt} width={240} height={126} />
              </div>
            ))}
        </div>
        <div className={styles.usedBy__list}>
          {data?.length > 0 &&
            data.map((item) => (
              <div className={styles['usedBy__list-item']} key={item.src}>
                <Image src={item.src} alt={item.alt} width={240} height={126} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default UsedBy
