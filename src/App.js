import React, { useState } from 'react';

function App() {
  const [contents, setContents] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const createContents = content => {
    setContents([...contents, content]);
  };

  const removeContent = id => {
    setContents(contents.filter(content => content.id !== id));
  };

  const updateContent = id => {
    setContents(
      contents.map(content =>
        content.id === id ? { ...content, title, desc } : content
      )
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    createContents({
      id: Date.now(),
      title,
      desc,
    });
    setTitle('');
    setDesc('');
  };

  console.log(contents);
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <p>
          <input
            type="text"
            name={title}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="title"
          ></input>
        </p>
        <p>
          <textarea
            name={desc}
            value={desc}
            onChange={e => setDesc(e.target.value)}
            placeholder="description"
          ></textarea>
        </p>
        <p>
          <input type="submit"></input>
        </p>
      </form>

      {contents.map((content, index) => (
        <div key={index}>
          <h3>{content.title}</h3>
          <span>{content.desc}</span>
          <button onClick={() => removeContent(content.id)}>삭제</button>
          <button onClick={() => updateContent(content.id)}>수정</button>
        </div>
      ))}
    </div>
  );
}

export default App;
