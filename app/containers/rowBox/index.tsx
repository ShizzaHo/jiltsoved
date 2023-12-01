import styles from './index.module.scss';

interface iProps {
    children?: React.ReactNode;
    stretch?: boolean;
}

export default function RowBox(props: iProps) {
    return (
        <div className={styles.row + " " + (props.stretch ? styles.stretch : undefined)}>
            {props.children}
        </div>
    );
}
