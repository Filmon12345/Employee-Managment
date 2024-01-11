
import Blog from "./Blog.jsx";
import useFetch from "./useFetch.jsx";
import LoadIcon from './icons8.ico';

const Home = () => {
const { products , isPending ,error } = useFetch('http://localhost:8000/blogs');
 
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div style={{ color: "gray" }}>
        <div className="load" 
        style={
          {
            marginTop: "100px",
          }
        }
        >Loading...<img src={LoadIcon}/></div>
        </div>}
      {products && <Blog products={products} />}
    </div>
  );
};
export default Home;
