import { formatCurrency } from '@/app/utils/format';
import styles from './index.module.scss';

interface iProps {
    icon: string;
    title: string;
    callback?: () => void;
}

export default function InfoBlock(props: iProps) {
    return (
        <div className={styles.info}>
            <div className={styles.info__icon}>
                <span className='material-symbols-rounded'>{props.icon}</span>
            </div>
            <div className={styles.info__info}>
                <span>{props.title}</span>
            </div>
            {props.callback ? <span className={'material-symbols-rounded ' + styles.link}>chevron_right</span> : undefined}
        </div>
    );
}
