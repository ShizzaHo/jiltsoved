import styles from './index.module.scss';

interface iProps {
    value?: string,
    className?: string,
    type?: string,
    placeholder?: string,
}

export default function Input(props: iProps) {
    return (
        <input className={props.className + " " + styles.input} type={props.type || "text"} value={props.value} placeholder={props.placeholder}/>
    );
}
