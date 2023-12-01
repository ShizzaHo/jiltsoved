import { formatCurrency } from '@/app/utils/format';
import styles from './index.module.scss';

interface iProps {
    indications: boolean;
}

export default function IndicationsBlock(props: iProps) {
    return (
        <div className={styles.indication}>
            <div className={styles.indication__icon}>
                <span className='material-symbols-rounded'>electric_meter</span>
            </div>
            <div className={styles.indication__info}>
                {props.indications ? (
                    <h1>У вас есть неотправленные показания</h1>
                ) : (
                    <h1>Показания счетчиков переданы!</h1>
                )}
                <span>
                    Отправку новых показаний необходимо производить с 18 числа
                    месяца по 25 число
                </span>
            </div>
        </div>
    );
}
