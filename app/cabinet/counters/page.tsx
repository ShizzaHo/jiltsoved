'use client';

import { observer } from 'mobx-react-lite';

import Button from '../../components/button';
import Input from '../../components/input';
import LayoutGlobal from '../../containers/layoutGlobal';
import styles from './page.module.scss';

import homeImage from '../../public/home.svg';
import Navigation from '../../containers/navigation';
import service from '../../service';
import { useEffect } from 'react';
import Content from '../../containers/content';
import RowBox from '../../containers/rowBox';
import PaymentBlock from '../../components/paymentBlock';
import IndicationsBlock from '../../components/indicationsBlock';
import InfoBlock from '../../components/infoBlock';
import FreeBlock from '../../components/freeBlock';

function Counters() {
    return (
        <>
            <LayoutGlobal
                title='Фамилия И. О.'
                subTitle='ул. Пушкина, д. 1, кв. 666'
                className={styles.main}
                accentColorHex='#0A632D'
            >
                <Navigation items={service.getMenu().getMenuItems()} />
                <Content title='Показания счетчиков'>
                    <IndicationsBlock indications={true} />
                    <InfoBlock icon='water_drop' title='Водоснабжение'/>
                    <InfoBlock icon='energy_savings_leaf' title='Электроэнергия'/>
                    <InfoBlock icon='device_thermostat' title='Отопление'/>
                    <InfoBlock icon='mode_heat' title='Газоснабжение'/>
                </Content>
            </LayoutGlobal>
        </>
    );
}

export default observer(Counters);
