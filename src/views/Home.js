import Navbar from '../components/Navbar';

function Home() {
  return `
  <div class="container">
    ${Navbar()}
    <h1>Home Page</h1>
  </div>
  `;
}

export default Home;
