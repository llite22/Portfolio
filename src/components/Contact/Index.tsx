import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Контакт</title>
        <link
          rel="icon"
          type="image/png"
          href="/images/cookie.png"
          sizes="any"
        />
      </Helmet>
      <section className="font-bold text-4xl text-blue-500 px-8 animate-bounce text-center">
        <h1 className="mt-28 flex justify-center">
          Моя почта для связи: llite2@yandex.ru
        </h1>
      </section>
    </>
  );
};

export default Contact;
