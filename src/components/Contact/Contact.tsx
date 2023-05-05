import {FC} from "react";
import styles from './Contact.module.scss'
import {Helmet} from "react-helmet-async";


const Contact: FC = () => {
    return (
        <>
            <Helmet>
                <title>Контакт</title>
                <link rel="icon" type="image/png" href="/images/cookie.png" sizes="any"/>
            </Helmet>
            <section className={`${styles.contact} animate-bounce text-center`}>
                <h1 className='mt-28'>Моя почта для связи: llite2@yandex.ru</h1>
            </section>
        </>
    )
}

export default Contact;