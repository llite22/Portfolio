import { ClockLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const About = () => (
  <>
    <Helmet>
      <title>Обо мне</title>
      <link rel="icon" type="image/png" href="/images/cookie.png" sizes="any" />
    </Helmet>
    <section className="font-bold text-5xl leading-tight text-indigo-900 text-center m-24">
      <h1 className="animate-bounce flex justify-center">
        Информация скоро появится
      </h1>
      <ClockLoader
        color={"#13B0F5"}
        loading={true}
        size={150}
        className="mx-auto mt-8 mb-8"
      />
    </section>
  </>
);
export default About;
