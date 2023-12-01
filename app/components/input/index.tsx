import styles from './index.module.scss';

interface iProps {
    value?: string;
    className?: string;
    type?: string;
    placeholder?: string;
    subTitle?: string;
}

export default function Input(props: iProps) {
    return (
        <div className={styles.inputBox}>
            <span className={styles.subTitle}>{props.subTitle}</span>
            <input className={props.className + " " + styles.input} type={props.type || "text"} value={props.value} placeholder={props.placeholder}/>
        </div>
    );
}
