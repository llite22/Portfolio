import {FC} from "react";
import styles from './About.module.scss'
import {ClockLoader} from 'react-spinners';
import {Helmet} from 'react-helmet-async';

const About: FC = () => (
    <>
        <Helmet>
            <title>Обо мне</title>
            <link rel="icon" type="image/png" href="/images/cookie.png" sizes="any"/>
        </Helmet>
        <section className={`${styles.about} text-center m-24`}>
            <h1 className='animate-bounce'>Информация скоро появится</h1>
            <ClockLoader color={'#13B0F5'} loading={true} size={150} className={`${styles.spinner} mx-auto mt-8 mb-8`}/>
        </section>
    </>

);
export default About;
