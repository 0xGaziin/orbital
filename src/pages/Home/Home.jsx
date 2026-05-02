import Header from "../../components/Header/Header";

function Home() {
  return (
    <>
      <Header />
      
      <section className="hero-section">
        <h1 className="hero-title">
          Imagine the best way to organize your studies
        </h1>

        <p className="hero-subtitle">
          The complete platform to manage your subjects, notes, and academic progress all in one place.
        </p>

        <div className="actions">
          <button>Start Now</button>
          <button>Find Out More</button>
        </div>
      </section>
    </>
  )
}

export default Home;