import styles from './index.module.scss';

interface iProps {
    children: React.ReactNode;
    subTitle: string;
    className?: string;
}

export default function LayoutGlobal(props: iProps) {
    return (
        <div className={styles.background}>
            <div className='container'>
                <div className='content-flex-column'>
                    <header className={styles.header}>
                        <h1>
                            Жильцовед <span>| {props.subTitle}</span>
                        </h1>
                    </header>
                    <main className={styles.main + " " + props.className}>{props.children}</main>
                </div>
            </div>
        </div>
    );
}
