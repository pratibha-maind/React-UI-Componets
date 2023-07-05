import ProductRow from "./ProductRow";
import ProductCategory from "./ProductCategory";
import "./ProductTable.css";

export default function ProductTable({products , filterText, inStockOnly }){
    const rows = [];
    let lastCategory = null;
    products.forEach((product) => {
        if(
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ){
            return;
        }
        if(inStockOnly && !product.stocked){
            return;
        }
        if(
            product.category !== lastCategory){
            rows.push(
                <ProductCategory 
                category = {product.category}
                key ={product.category} />

            );
        }
        rows.push(
            <ProductRow
            product = {product}
            key={product.name} />
        );
        lastCategory = product.category;
    });
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th className="name">Name
                    </th>
                    <th className="price">Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        </>
    );

}