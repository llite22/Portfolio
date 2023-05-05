import {FC} from "react";
import styles from './ProjectCard.module.scss'
import {ProjectCardProps} from "../../Projects/Projects.tsx";

const ProjectCard: FC<ProjectCardProps> = ({title, description, stack, imageUrl, livePreview, viewCode}) => {

    const truncatedTitleStackTitle = (str: string) => {
        if (str.length >= 19) {
            return str.substring(0, 19) + '...'
        }
        return str
    }
    const truncatedDescription = (str: string) => {
        if (str.length >= 185) {
            return str.substring(0, 185) + '...'
        }
        return str
    }
    const truncatedTitleStack = (str: string) => {
        if (str.length >= 35) {
            return str.substring(0, 35) + '...'
        }
        return str
    }

    return (
        <section className='relative'>
            <div className={`${styles.projectCard} `}>
                <img src={imageUrl} alt="img" width={375} height={260}/>
                <h2 className='text-center mt-2'>{truncatedTitleStackTitle(title)}</h2>
                <p className='mt-2'>{truncatedDescription(description)}</p>
                <h3 className='absolute bottom-12'>{truncatedTitleStack(stack)}</h3>
                <div className='absolute bottom-2 left-8 w-10/12 flex justify-between'>
                    <div className='flex'>
                        <img className='mr-2' src="../../../images/linkSite.svg" alt="link"/>
                        <a className="underline" href={livePreview}>Сайт</a>
                    </div>
                    <div className='flex'>
                        <img className='mr-2' src="../../../images/linkSiteGit.svg" alt="link"/>
                        <a className="underline" href={viewCode}>Код</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectCard;

