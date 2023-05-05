import {FC} from "react";
import styles from './TechStack.module.scss'
import {Helmet} from "react-helmet-async";

const TechStack: FC = () => (
    <>
        <Helmet>
            <title>Стэк</title>
            <link rel="icon" type="image/png" href="/images/cookie.png" sizes="any"/>
        </Helmet>
        <section
            className={`${styles.techStack} gap-5 mx-auto max-w-screen-xl mt-24 mb-6`}>
            <h1 className='animate-bounce'>Мой технический стек</h1>
            <p className='animate-pulse'>Технологии, с которыми я работал в последнее время</p>
            <div className={`${styles.grid} mt-24`}>
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-28 ">
                    <img src="../../../images/html.svg" alt="html" className="justify-self-center"/>
                    <img src="../../../images/css.svg" alt="css" className="justify-self-center"/>
                    <img src="../../../images/js.svg" alt="js" className="justify-self-center"/>
                    <img src="../../../images/react.svg" alt="react" className="justify-self-center"/>
                    <img src="../../../images/redux.svg" alt="redux-toolkit" className="justify-self-center"/>
                    <img src="../../../images/sass.svg" alt="sass" className="justify-self-center"/>
                    <img src="../../../images/tailwind.svg" alt="tailwind" className="justify-self-center"/>
                    <img src="../../../images/git.svg" alt="git" className="justify-self-center"/>
                    <img src="../../../images/axios.png" alt="axios" className="justify-self-center" width={106}
                         height={106}/>
                    <img src="../../../images/gitHub.svg" alt="github" className="justify-self-center " width={106}/>
                    <img src="../../../images/next-js.svg" alt="nextjs" className="justify-self-center" width={106}/>
                    <img src="../../../images/ts.png" alt="ts" className="justify-self-center" width={106}/>
                </div>
            </div>
        </section>

    </>
);

export default TechStack;