import Hero from "./components/Hero";
import Products from "./components/Products";
import Featured from "./components/Featured";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured>
        <h1 className="title-mask text-gradient-orange">
          What Muse <br />
          creates
          <br />
        </h1>
        <h3 className="xs:px-16">For&nbsp;OUR&nbsp;400M+ USERS</h3>
      </Featured>
      <Products />
      <Featured>
        <h2 className="title-mask text-gradient-green">
          and so much <br />
          more to come
          <br />
        </h2>
      </Featured>
    </>
  );
}
