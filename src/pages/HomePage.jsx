import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import BrowsJobs from '../components/BrowsJobs'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev
"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <BrowsJobs isHome={true } />
      <ViewAllJobs/>
    </>
  );
};

export default HomePage;
