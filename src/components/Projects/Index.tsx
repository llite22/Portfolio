import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import ProjectCard from "../ui/ProjectCard/Index";
import Skeleton from "./Skeleton";

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  stack: string;
  imageUrl: string;
  livePreview: string;
  viewCode: string;
}

const Projects = () => {
  const [items, setItems] = useState<ProjectCardProps[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get<ProjectCardProps[]>(
          "https://1e2efbc5266c78e7.mokky.ru/items"
        );
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Проекты</title>
        <link
          rel="icon"
          type="image/png"
          href="/images/cookie.png"
          sizes="any"
        />
      </Helmet>
      <section className="mx-auto max-w-screen-xl mt-24 pl-4 pr-4">
        <h3 className="animate-bounce font-bold text-4xl text-indigo-900">
          Проекты
        </h3>
        <p className="animate-pulse text-gray-500 font-medium text-base">
          Вещи, которые я построил на данный момент
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center mt-20 gap-y-8 mb-20">
          {isLoading
            ? [...new Array(6)].map((_, index: number) => (
                <Skeleton key={index} />
              ))
            : items.map((obj) => (
                <ProjectCard
                  key={obj.id}
                  id={obj.id}
                  title={obj.title}
                  description={obj.description}
                  stack={obj.stack}
                  imageUrl={obj.imageUrl}
                  livePreview={obj.livePreview}
                  viewCode={obj.viewCode}
                />
              ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
