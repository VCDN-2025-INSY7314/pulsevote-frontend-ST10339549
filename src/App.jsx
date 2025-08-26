import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/test')  // CORS is enabled on backend
      .then(res => setApi(res.data))
      .catch(() => setApi({ status: 'error' }));
  }, []);

  return (
    <>
      <h2>Welcome to PulseVote</h2>
      <pre style={{background:'#f6f8fa', padding:'8px', borderRadius:6}}>
        {api ? JSON.stringify(api, null, 2) : 'Loading API...'}
      </pre>
    </>
  );
}

export default App;
