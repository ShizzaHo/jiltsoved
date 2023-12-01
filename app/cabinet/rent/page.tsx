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

function Rent() {
    return (
        <>
            <LayoutGlobal
                title='Фамилия И. О.'
                subTitle='ул. Пушкина, д. 1, кв. 666'
                className={styles.main}
                accentColorHex='#0A632D'
            >
                <Navigation items={service.getMenu().getMenuItems()} />
                <Content title='123'>
                    <PaymentBlock money={100} />
                    <div className={styles.rowInputs}>
                        <Input value='100' placeholder='100' subTitle='Сумма к оплате' />
                        <Button value='Оплатить' />
                    </div>
                </Content>
            </LayoutGlobal>
        </>
    );
}

export default observer(Rent);
