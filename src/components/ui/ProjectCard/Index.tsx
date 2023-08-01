import { ProjectCardProps } from "../../Projects/Index";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  stack,
  imageUrl,
  livePreview,
  viewCode,
}: ProjectCardProps) => {
  const truncatedTitleStackTitle = (str: string): string => {
    if (str.length >= 19) {
      return str.substring(0, 19) + "...";
    }
    return str;
  };
  const truncatedDescription = (str: string): string => {
    if (str.length >= 185) {
      return str.substring(0, 185) + "...";
    }
    return str;
  };
  const truncatedTitleStack = (str: string): string => {
    if (str.length >= 35) {
      return str.substring(0, 35) + "...";
    }
    return str;
  };

  return (
    <section className="relative">
      <div className="w-[375px] h-[570px] bg-white shadow-lg rounded-xl">
        <img
          className="rounded-t-xl"
          src={imageUrl}
          alt="img"
          width={375}
          height={260}
        />
        <h2 className="text-center mt-2 text-black font-semibold text-lg overflow-hidden break-words">
          {truncatedTitleStackTitle(title)}
        </h2>
        <p className="mt-2 px-6 text-gray-600 font-medium text-base overflow-hidden break-words text-left">
          {truncatedDescription(description)}
        </p>
        <h3 className="absolute bottom-12 px-6 text-blue-900 font-medium text-sm overflow-hidden break-words">
          {truncatedTitleStack(stack)}
        </h3>
        <div className="absolute bottom-2 left-8 w-10/12 flex justify-between">
          <div className="flex">
            <img
              className="mr-2"
              src="../../../images/linkSite.svg"
              alt="link"
            />
            <Link className="underline" to={livePreview}>
              Сайт
            </Link>
          </div>
          <div className="flex">
            <img
              className="mr-2"
              src="../../../images/linkSiteGit.svg"
              alt="link"
            />
            <Link className="underline" to={viewCode}>
              Код
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
