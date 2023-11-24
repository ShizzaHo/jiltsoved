import Button from '../components/button';
import Input from '../components/input';
import LayoutGlobal from '../containers/layoutGlobal';
import styles from './page.module.scss';

import homeImage from '../../public/home.svg';

export default function Home() {
    return (
        <>
            <LayoutGlobal
                subTitle='Ваш надежный гид в мире уютного жилья'
                className={styles.main}
            >
                <div className={styles.main__info}>
                    <img src={homeImage.src}></img>
                    <h1>Добро пожаловать в Жильцовед!</h1>
                    <h2>
                        Откройте дверь к беспроблемному управлению вашим жильем
                        с приложением 'Жильцовед'! Выбирайте свой дом,
                        передавайте показания и оплачивайте коммунальные услуги
                        без лишних хлопот. Ваш комфорт — наш приоритет. Зависит
                        от нас сделать вашу жизнь проще!
                    </h2>
                </div>
                <div className={styles.main__control}>
                    <span>Давайте начнем! Выберите ваш вариант</span>
                    <div>
                        <Button value='Я администратор'/>
                        <Button value='Я жилец'/>
                    </div>
                </div>
            </LayoutGlobal>
        </>
    );
}
