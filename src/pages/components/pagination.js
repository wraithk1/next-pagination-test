import styles from '@/styles/components/pagination.module.css'
import btnStyles from '@/styles/components/button.module.css'

import Button from '@/pages/components/button'
import Input from '@/pages/components/input'


export default function Pagination({ skip, limit, page, handlePaginationClick }) {
    return (
        <div className={styles.pagination}>
            <Button 
                disabled={skip <= 0}
                className={btnStyles.btn + ' ' +  btnStyles.default}
                handleClick={() => handlePaginationClick(skip - limit, limit, parseInt(page) - 1)}
                text='пред.'
            />

            <Input 
                disabled={true}
                className={styles.total}
                text={page}
            />

            <Button 
                disabled={skip >= 90}
                className={btnStyles.btn + ' ' +  btnStyles.default}
                handleClick={() => handlePaginationClick(skip + limit, limit, parseInt(page) + 1)}
                text='след.'
            />
        </div>
    );
}