import "./SearchBar.css";

export default function SearchBar({filterText, inStockOnly}){
    return (
        <>
        <form>
            <input className="search" type="text" 
            placeholder="Search..." 
            value={filterText}
            />
            <label className="label">
            <input className="checkbox" type="checkbox" 
            checked={inStockOnly}/>
            {' '}
            Only show products in stock
            
            </label>
            
            
            
            
        </form>
        </>
    )
}