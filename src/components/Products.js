import data from '../data/data.json'
import Card from './card';

const Products = ({items,setItems}) => {
  
  const { products } =data


  return (
  
  <div className="card-grid">
  
    {products.map((product,index)=>(
      <Card 
      key={index}
      images={product.images[0]}
      title={product.title}
      price={product.price}
      desc={product.description}
      products={products}
      items={items}
      setItems={setItems}
      />
    ))
    }

</div>
  )
}

export default Products
