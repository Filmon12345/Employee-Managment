
  const Blog = (PropTypes) => {
  
 
 const product =  PropTypes.products;
 
let isShowProduct = true;

  return (
    <div  style={{
      display:'flex',
      flexWrap:"wrap",
     gap:30,
     flex:1,
     margin:"100px 0 50px 80px",
    }}>
     
    {isShowProduct ? 
    <>
      {product.map((product) => (
        <div
        style={{
          background:'#eee',
          padding:10,
          width:'400px',
          height:"140px",
          overflow:"auto",
          border:'1px solid  #ccc',
          borderRadius:'5px',
        }}
         className="products" key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.catagory}</p>
          <p>{product.body}</p>
        </div>
      ))}
      </>
      :<p>You can`t show the products</p>
    
    }
   
    </div>
      
  );
};
export default Blog;
