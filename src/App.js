import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // Do nothing if loading because the array is empty when the page loads
    if (loading) return;
    setFollowers(data[page]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? '...Loading' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && <div className='btn-container'>Herro wolrd</div>}
      </section>
    </main>
  );
}

export default App;
