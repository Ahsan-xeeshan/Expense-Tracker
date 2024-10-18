import CalculationBoard from "../components/CalculationBoard";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <CalculationBoard />
      </main>
    </>
  );
};

export default Home;
