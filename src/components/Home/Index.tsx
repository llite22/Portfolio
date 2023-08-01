import photo from "../../assets/img/peter.jpg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Главная</title>
        <link
          rel="icon"
          type="image/png"
          href="/images/cookie.png"
          sizes="any"
        />
      </Helmet>
      <section className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-xl mt-24 pl-4 pr-4">
        <div className="text-center sm:text-left font-semibold text-5xl leading-tight max-w-[500px] h-[290px] text-gray-300 animated-text">
          <p>
            Привет 👋, Меня зовут
            <br />
            <span className="text-blue-500">Пётр</span>
            <br />Я создаю вещи для Интернета
          </p>
        </div>
        <div className="mt-24 sm:mt-4">
          <img
            className="rounded-full animated-text2"
            src={photo}
            alt="photo"
            width={349}
            height={349}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
