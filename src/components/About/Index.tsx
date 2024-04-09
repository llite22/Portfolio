import { ClockLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

interface Work {
  id: number;
  name: string;
  time: string;
}

const About = () => {
  const [items, setItems] = useState<Work[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://b7abe40701fc32eb.mokky.dev/works"
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
        <title>Обо мне</title>
        <link
          rel="icon"
          type="image/png"
          href="/images/cookie.png"
          sizes="any"
        />
      </Helmet>
      <section className="font-bold text-5xl leading-tight text-indigo-900 text-center m-24">
        {isLoading ? (
          <>
            <h1 className="animate-bounce flex justify-center">
              Информация скоро появится
            </h1>
            <ClockLoader
              color={"#13B0F5"}
              loading={true}
              size={150}
              className="mx-auto mt-8 mb-8"
            />
          </>
        ) : (
          <>
            {items.map((obj) => (
              <div
                key={obj.id}
                className="flex justify-center mx-auto border-2 rounded-lg p-10 max-w-screen-xl mb-12"
              >
                <div>
                  <h1>{obj.name}</h1>
                  <b>{obj.time}</b>
                </div>
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default About;
