import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { techs } from "../../utils/ImageStack";

const TechStack: FC = () => {
  return (
    <>
      <Helmet>
        <title>Стэк</title>
        <link
          rel="icon"
          type="image/png"
          href="/images/cookie.png"
          sizes="any"
        />
      </Helmet>
      <section className="gap-5 mx-auto max-w-screen-xl mt-24 mb-6 pl-4 pr-4">
        <h1 className="animate-bounce font-bold text-4xl text-indigo-800">
          Мой технический стэк
        </h1>
        <p className="animate-pulse text-gray-500 font-medium text-base">
          Технологии, с которыми я работал в последнее время
        </p>
        <div className="mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-28 mt-28 mb-8">
            {techs.map((tech, index: number) => (
              <img
                key={index}
                src={tech.src}
                alt={tech.alt}
                width={tech.width}
                height={tech.height}
                className="justify-self-center"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
