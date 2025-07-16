
const works = [
  { title: 'Project One', description: 'Description for project one.' },
  { title: 'Project Two', description: 'Description for project two.' },
  { title: 'Project Three', description: 'Description for project three.' },
];

const Works = () => (
  <div style={{ padding: 32 }}>
    <h1>My Works</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {works.map((work, idx) => (
        <div key={idx} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, minWidth: 220 }}>
          <h2>{work.title}</h2>
          <p>{work.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Works; 