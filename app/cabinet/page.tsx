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

function Cabinet() {
    useEffect(()=>{
        service.getMenu().setMenuItems([
            { icon: 'home', title: 'Главная', callbacks: ()=>{alert("123")} },
            { icon: 'message', title: 'Сообщения от УК' },
            { icon: 'home_repair_service', title: 'Услуги от УК' },
            { icon: 'forum', title: 'Общедомовой чат' },
            { icon: 'contacts', title: 'Контакты УК' },
        ]);
    }, [])

    return (
        <>
            <LayoutGlobal
                title='Фамилия И. О.'
                subTitle='ул. Пушкина, д. 1, кв. 666'
                className={styles.main}
                accentColorHex='#0A632D'
            >
                <Navigation items={service.getMenu().getMenuItems()} />
            </LayoutGlobal>
        </>
    );
}

export default observer(Cabinet);
