import {FC} from "react";
import photo from '../../assets/img/peter.jpg'
import styles from './Home.module.scss'
import '../../index.scss'
import {Helmet} from "react-helmet-async";


const Home: FC = () => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
                <link rel="icon" type="image/png" href="/images/cookie.png" sizes="any"/>
            </Helmet>
            <section
                className={`${styles.home} flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-xl mt-24`}>
                <div className={`${styles.text} animated-text`}>
                    <p>Привет 👋,
                        Меня зовут
                        <br/>
                        <span>Пётр</span>
                        <br/>
                        Я создаю вещи для Интернета</p>
                </div>
                <div>
                    <img className={`${styles.photo} animated-text2`} src={photo} alt="photo" width={349} height={349}/>
                </div>
            </section>
        </>
    );
};


export default Home;