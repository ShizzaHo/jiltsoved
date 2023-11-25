import Button from '../components/button';
import Input from '../components/input';
import LayoutGlobal from '../containers/layoutGlobal';
import styles from './page.module.scss';

import homeImage from '../../public/home.svg';

export default function AdminAuth() {
    return (
        <>
            <LayoutGlobal subTitle='Администратор' className={styles.main}>
                <form className={styles.authForm}>
                    <Input
                        placeholder='Введите секретный код администратора вашей УК'
                        subTitle='Секретный код администратора'
                    ></Input>
                    <Input
                        placeholder='Введите ваш личный пароль'
                        subTitle='Введите ваш личный пароль'
                        type='password'
                    ></Input>

                    <Button value='Войти'></Button>
                </form>
                <span className={styles.specUrl}><a>Забыли код администратора?</a></span>
                <span className={styles.specUrl}>
                    Забыли пароль? Свяжитесь с вашим начальством для
                    восстановления доступа
                </span>
                <span className={styles.partner}><a>Партнерство с нашим приложением</a></span>
            </LayoutGlobal>
        </>
    );
}
