import styles from '@/styles/components/card.module.css'

export default function Card({ data }) {
    return(
        <div class={styles.card} key={data.id}>
            <figure class={styles.thumbnail}>
                <img src={data.thumbnail} />
                <span class={styles.title}>{data.title}</span>
                <div className=''>
                    <small className={styles.brand}>{data.brand}</small>
                    <span className={styles.badge}>{data?.badge || 'new'}</span>
                </div>
            </figure>
        </div>
    );
}