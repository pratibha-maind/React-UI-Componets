import "./ProductRow.css";

export default function ProductRow({product}){
    const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

    return(
        <>
       <tr>
        <td className = "Name">{name}</td>
        <td className="Price">{product.price}</td>
       </tr>
            
        
        </>
    );
}