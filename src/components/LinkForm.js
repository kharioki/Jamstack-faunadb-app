import { useState } from 'react';

export default function LinkForm({ refreshLinks }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const resetForm = () => {
    setName('');
    setUrl('');
    setDescription('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Name:', name);

    const body = { name, url, description };
    try {
      await fetch('/api/createLink', {
        method: 'POST',
        body: JSON.stringify(body),
      });

      resetForm();
      refreshLinks();
    } catch (error) {
      console.error("OH SNAP!, ", error);
    }
  }

  return (
    <div className="card">
      <div className="card-header">Add Link</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              className="form-control"
              type="text"
              id="url"
              placeholder="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
