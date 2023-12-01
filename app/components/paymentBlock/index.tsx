import { formatCurrency } from '@/app/utils/format';
import styles from './index.module.scss';

interface iProps {
    money: number;
}

export default function PaymentBlock(props: iProps) {
    return (
        <div className={styles.payment}>
            <div className={styles.payment__icon}>
                <span className='material-symbols-rounded'>payments</span>
            </div>
            <div className={styles.payment__info}>
                {props.money > 0 ? <h1>{formatCurrency(props.money)}</h1> : <h1>Все оплачено!</h1>}
                <span>Необходимо оплатить до 25 декабря</span>
            </div>
        </div>
    );
}
