const title = <h1>My First React Element!</h1>;
const description = <p>I just learned how to create a React node and render it in to the dom</p>;

const header = React.createElement (
  'header',
  null,
  title,
  description
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
