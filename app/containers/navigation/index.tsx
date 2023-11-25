import styles from './index.module.scss';

import homeIcon from '../../../public/icons/homeIcon.svg';
import { getRandomArbitrary } from '@/app/utils/random';
import { iMenuItem } from '@/app/interfaces';

interface iProps {
    items: Array<iMenuItem>;
}

export default function Navigation(props: iProps) {
    return (
        <nav className={styles.nav}>
            {props.items.map((item: iMenuItem) => {
                return (
                    <div className={styles.nav__item} onClick={item.callbacks} key={getRandomArbitrary(0, 99)}>
                        <div className={styles.nav__item__icon}>
                            <span className='material-symbols-rounded'>
                                {item.icon}
                            </span>
                        </div>
                        <div className={styles.nav__item__title}>{item.title}</div>
                    </div>
                );
            })}
        </nav>
    );
}
