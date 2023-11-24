import styles from './index.module.scss';

interface iProps {
    value?: string,
    className?: string,
}

export default function Button(props: iProps) {
    return (
        <button className={props.className + " " + styles.button}>{props.value}</button>
    );
}
