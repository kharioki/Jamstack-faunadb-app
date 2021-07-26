import { useEffect, useState } from 'react';
import LinkList from './components/LinkList';

function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch('/api/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List O' Links</h1>
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
