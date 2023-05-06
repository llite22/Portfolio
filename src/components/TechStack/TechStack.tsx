import {FC, useEffect, useState} from "react";
import styles from './TechStack.module.scss'
import {Helmet} from "react-helmet-async";
import SkeletonStack from "./SkeletonStack.tsx";

const techs = [
    {src: "../../../images/html.svg", alt: "html", width: "106", height: "106"},
    {src: "../../../images/css.svg", alt: "css", width: "106", height: "106"},
    {src: "../../../images/js.svg", alt: "js", width: "106", height: "106"},
    {src: "../../../images/react.svg", alt: "react", width: "106", height: "106"},
    {src: "../../../images/redux.svg", alt: "redux-toolkit", width: "106", height: "106"},
    {src: "../../../images/sass.svg", alt: "sass", width: "106", height: "106"},
    {src: "../../../images/tailwind.svg", alt: "tailwind", width: "106", height: "106"},
    {src: "../../../images/git.svg", alt: "git", width: "106", height: "106"},
    {src: "../../../images/axios.png", alt: "axios", width: "106", height: "106"},
    {src: "../../../images/gitHub.svg", alt: "github", width: "106"},
    {src: "../../../images/next-js.svg", alt: "nextjs", width: "106"},
    {src: "../../../images/ts.png", alt: "ts", width: "106"}
];

const TechStack: FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false);
    })
    return (
        <>
            <Helmet>
                <title>Стэк</title>
                <link rel="icon" type="image/png" href="/images/cookie.png" sizes="any"/>
            </Helmet>
            <section className={`${styles.techStack} gap-5 mx-auto max-w-screen-xl mt-24 mb-6}`}>
                <h1 className='animate-bounce'>Мой технический стэк</h1>
                <p className='animate-pulse'>Технологии, с которыми я работал в последнее время</p>
                <div className={`${styles.grid} mt-24}`}>
                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-28 mt-28 mb-8">
                        {
                            isLoading ? [...new Array(12)].map((_, index) => <SkeletonStack key={index}/>)
                                : techs.map((tech, index: number) => (
                                    <img
                                        key={index}
                                        src={tech.src}
                                        alt={tech.alt}
                                        width={tech.width}
                                        height={tech.height}
                                        className="justify-self-center"
                                    />
                                ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStack;