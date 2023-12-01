import styles from './index.module.scss';

interface iProps {
    children?: React.ReactNode;
    title?: string;
}

export default function Content(props: iProps) {
    return (
        <div className={styles.main}>
            {props.title ? <div className={styles.title}>
            <div className={styles.title__icon}>
                <span className='material-symbols-rounded'>chevron_left</span>
            </div>
            <span>{props.title}</span>
        </div> : undefined}
            <div className={styles.padding}>
                {props.children}
            </div>
        </div>
    );
}
