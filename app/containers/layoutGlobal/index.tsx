import styles from './index.module.scss';

interface iProps {
    children: React.ReactNode;
    title: string;
    subTitle: string;
    className?: string;

    accentColorHex?: string;
}

export default function LayoutGlobal(props: iProps) {
    return (
        <div className={styles.background} style={{background: "linear-gradient(180deg, "+props.accentColorHex+" 0%, #000 50%)"}}>
            <div className='container'>
                <div className='content-flex-column'>
                    <header className={styles.header}>
                        {props.title ? (
                            <div className={styles.header__user}>
                                <h1>{props.title}</h1>
                                <h2>{props.subTitle}</h2>
                            </div>
                        ) : (
                            <h1>
                                Жильцовед{' '}
                                {props.subTitle ? (
                                    <span>| {props.subTitle}</span>
                                ) : undefined}
                            </h1>
                        )}
                    </header>
                    <main className={styles.main + ' ' + props.className}>
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
}
