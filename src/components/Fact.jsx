import Banner from "./Banner";

function Fact() {
  return (
    <section className="fact-bg">
      <div className="container">
        <div className="flexbox-sty flex-dir spacing">
          <Banner
            header="More than a free link shortner"
            white
            btn="Get Started"
            lightFnt
          />
        </div>
      </div>
    </section>
  );
}

export default Fact;
