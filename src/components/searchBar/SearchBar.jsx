import React from 'react'
import './SearchBar.scss'

const types = ['buy', 'rent']

const SearchBar = () => {
  const [query, setQuery] = React.useState({
    type: 'buy',
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery({...query, type: val})
  };

  return (
    <div className='searchBar'>
      <div className='type'>
        {
          types.map((type)=>{
          return <button onClick={()=>switchType(type)} className={query.type === type? "active" : ""}>{type}</button>
          })
        }
      </div>
      <form>
        <input 
          type="text"
          name='location'
          placeholder='City Location'
        />
        <input 
          type="text"
          name='minprice'
          min={0} max={1000000}
          placeholder='Min Price'
        />
        <input 
          type="text"
          name='maxprice'
          min={0} max={1000000}
          placeholder='Max Price'
        />
        <button>
          <img src="/search.png" alt="search" style={{width: "30px", padding: "10px"}}/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar