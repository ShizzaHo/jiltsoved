import Button from '../components/button';
import Input from '../components/input';
import LayoutGlobal from '../containers/layoutGlobal';
import styles from './page.module.scss';

import homeImage from '../../public/home.svg';

export default function UserAuth() {
    return (
        <>
            <LayoutGlobal subTitle='Администратор' className={styles.main}>
                <form className={styles.authForm}>
                    <Input
                        placeholder='Начните писать первые буквы, например: ЖК...'
                        subTitle='Выберите вашу УК'
                    ></Input>
                    <Input
                        placeholder='Лицевой счет написан на вашей квитанции'
                        subTitle='Введите ваш лицевой счет'
                        type='number'
                    ></Input>

                    <Button value='Войти'></Button>
                </form>
            </LayoutGlobal>
        </>
    );
}
