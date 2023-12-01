import { formatCurrency } from '@/app/utils/format';
import styles from './index.module.scss';

interface iProps {
    children?: React.ReactNode;
}

export default function FreeBlock(props: iProps) {
    return (
        <div className={styles.free}>
            {props.children}
        </div>
    );
}
