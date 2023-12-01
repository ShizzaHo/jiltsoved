'use client';

import { observer } from 'mobx-react-lite';

import Button from '../components/button';
import Input from '../components/input';
import LayoutGlobal from '../containers/layoutGlobal';
import styles from './page.module.scss';

import homeImage from '../../public/home.svg';
import Navigation from '../containers/navigation';
import service from '../service';
import { useEffect } from 'react';
import Content from '../containers/content';
import RowBox from '../containers/rowBox';
import PaymentBlock from '../components/paymentBlock';
import IndicationsBlock from '../components/indicationsBlock';
import InfoBlock from '../components/infoBlock';
import FreeBlock from '../components/freeBlock';

function Cabinet() {
    // useEffect(()=>{
    //     service.getMenu().setMenuItems([
    //         { icon: 'home', title: 'Главная', callbacks: ()=>{alert("123")} },
    //         { icon: 'message', title: 'Сообщения от УК' },
    //         { icon: 'home_repair_service', title: 'Услуги от УК' },
    //         { icon: 'forum', title: 'Общедомовой чат' },
    //         { icon: 'contacts', title: 'Контакты УК' },
    //     ]);
    // }, [])

    return (
        <>
            <LayoutGlobal
                title='Фамилия И. О.'
                subTitle='ул. Пушкина, д. 1, кв. 666'
                className={styles.main}
                accentColorHex='#0A632D'
            >
                <Navigation items={service.getMenu().getMenuItems()} />
                <Content>
                    <RowBox>
                        <PaymentBlock money={0} />
                        <IndicationsBlock indications={true} />
                    </RowBox>
                    <InfoBlock icon='message' title='Обменивайтесь сообщениями и событиями в нашем общедомовом чате' callback={()=>{}} />
                    <FreeBlock>
                        <h1>Есть вопросы? Пишите нам!</h1>
                        <p>Что-то не получается? Не происходит оплата, или не отправляются показания? Тогда пишите нам на почту: <a href='mailto:uk@mail.ru'>uk@mail.ru</a></p>
                    </FreeBlock>
                </Content>
            </LayoutGlobal>
        </>
    );
}

export default observer(Cabinet);
