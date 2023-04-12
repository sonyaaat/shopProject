import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllItems } from '../redux/main/main-operations';
import { selectIsLoading, selectItems } from '../redux/main/main-selectors';
import Spinner from './Spinner';
const Portfolio = () => {
  const items = useSelector(selectItems);
  const [filter, setFilter] = useState('');
  const [search, setSerch] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('aa');
    dispatch(getAllItems());
  }, [dispatch]);
 

  const changeFilter = evt => {
    evt.preventDefault();
    const value = evt.target.value;
    setFilter(value);
  };
  const isLoading = useSelector(selectIsLoading);
 
  
  
  console.log(items,'KKK')
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchedItems, setSearchedItems] = useState(items);
  console.log('items', items);
  useEffect(() => {
    if(items){
      setFilteredItems(items)
      setSearchedItems(items)
    }
    if (filter === 'toHigh') {
      const res = [...items].sort(
        (first, second) => parseInt(first.price) - parseInt(second.price)
      );
      setFilteredItems(res);
    }
    if (filter === 'toLow') {
      const res = [...items].sort(
        (first, second) => parseInt(second.price) - parseInt(first.price)
      );
      setFilteredItems(res);
    }
    if (filter === 'toAlph') {
      const res = [...items].sort((first, second) =>
        first.name.localeCompare(second.name)
      );
      setFilteredItems(res);
    }
    if(filter==="newest")
    {
      setFilteredItems(items)
    }
  }, [filter, items]);
  useEffect(() => {
    if (search) {
      const res=[...filteredItems].filter((item)=>{
        return item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search)
      })
      console.log("SEARCH".res)
      setSearchedItems(res)
    }
    else{
      setSearchedItems(filteredItems)
    }
    
  }, [search, filteredItems]);
  
  function handleChange(event) {
    setSerch(event.target.value)
    console.log(event.target.value);
  }
  return (
    <>
      <main>
        <section className="portfolio section">
          <div className="container portfolio__container">
            <h1 hidden>Portfolio</h1>

         
            

              <input type="text" placeholder="What you want to find?" value={search} class="portfolio__input" onChange={handleChange} />
             
           

            <script
              type="module"
              src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
              nomodule
              src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            ></script>

            <label htmlFor="size" className="order-search-label">
              Filter
            </label>
            <select
              id="size"
              name="filter"
              className="order-search-select portfolio__select"
              onChange={changeFilter}
            >
              <option></option>
              <option value="newest" selected> Newest</option>
              <option value="toHigh">Price: Low to High</option>
              <option value="toLow">Price: High to Low</option>
              <option value="toAlph">In alphabetical order</option>
            </select>

           
            {isLoading ? (
              <Spinner />
            ) : (
              <ul class="list portfolio__list">
                {searchedItems &&
                  searchedItems.map(item => (
                    <li class="portfolio__item">
                      <Link
                        to={`/item/${item._id}`}
                        class="link portfolio__link"
                      >
                        <div class="portfolio__thumb">
                          <img
                            alt={item.name}
                            class="portfolio__img"
                            src={`http://localhost:3000/${item.image}`}
                          />
                        </div>
                        <div class="portfolio__content">
                          <h2 class="portfolio__header">{item.name}</h2>
                          <p class="portfolio__text">{item.description}</p>
                          <p class="portfolio__price">Price: {item.price}₴</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                    {searchedItems.length===0 && search && <p className="basket__empty">There isn`t any item with this name</p>}
              </ul>
            
            )}
          </div>
        </section>
      </main>
    </>
  );
};
export default Portfolio;
