import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // Current Item
  const fetchJobs = async () => {
    const resp = await fetch(url);
    const newJobs = await resp.json();
    // After React 18 it is fine to change the sequence of the following ,as it implements something called batch bashing which basically renders them at the same time
    setJobs(newJobs);
    setIsLoading(false);
  };
  console.log(jobs);
  useEffect(() => {
    // fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return <h2>Tabs Starter</h2>;
};
export default App;
