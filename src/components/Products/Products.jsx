import React, { useState } from 'react'
import './Products.css'

const Products = () => {

    const [filter, setFilter] = useState("All");
    const [activeButton, setActiveButton] = useState(null);
   
    const handleFilterChange = (value, index) => {
        setFilter(value);
        setActiveButton(index);
     
    };


    

    return (
        <section>
            <div className="products">
                <h1>PRODUCT</h1>
                <div className="filter-btn">
                    <button onClick={() => handleFilterChange("All", 0)}      className={filter === "All" ? '' : (activeButton === 0 ? 'active' : '')}>All</button>
                    <button onClick={() => handleFilterChange("3D Models", 1)}  className={activeButton === 1 ? 'active' : ''}>3D Models</button>
                    <button onClick={() => handleFilterChange("Tutorials", 2)}  className={activeButton === 2 ? 'active' : ''}> Tutorials </button>
                </div>
                <div className="products-box">
                {filter === "All" || filter === "All" ? (
                    <div className='box'><div className="border">
                        <img src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                        <p>3D Man</p>
                        <small>$4000</small>
                        <button>Buy</button>
                    </div>
                         ) : null}
                    {filter === "All" || filter === "3D Models"  ? (
                    <div className='box'><div className="border">
                        <img src="https://plus.unsplash.com/premium_photo-1683887064106-531532ecdf20?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p>Bowl 3D</p>
                        <small>$6000</small>
                        <button>Buy</button>
                    </div>
                    ) : null}
                    
                    {filter === "All" || filter === "3D Models" ? (
                    <div className='box'><div className="border">
                    <img src="https://images.unsplash.com/photo-1641391503184-a2131018701b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p>Barney 3D</p>
                        <small>$7000</small>
                        <button>Buy</button>
                        </div>) : null}
                    
                        {filter === "All" || filter === "Tutorials" ? (
                    <div className='box'><div className="border">
                        <img src="https://images.unsplash.com/photo-1637511626493-bef85b22d1d5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p>Ball Motion</p>
                        <small>$9000</small>
                        <button>Buy</button>
                        </div>) : null}
                        {filter === "All" || filter === "Tutorials" ? (
                    <div className='box'><div className="border">
                        <img src="https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p>4D Lady</p>
                        <small>$4900</small>
                        <button>Buy</button>
                        </div>) : null}
                        {filter === "All" || filter === "Tutorials" ? (
                   
                    <div className='box'><div className="border">
                        <img src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p>Monalisa</p>
                        <small>$4000</small>
                        <button>Buy</button>
                        </div>) : null}
                        {filter === "All" || filter === "Tutorials" ? (
                   
                    <div className='box'><div className="border">
                        <img src="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p>Cats and Dogs</p>
                        <small>$8900</small>
                        <button>Buy</button>
                        </div>) : null}
                        {filter === "All" || filter === "Tutorials" ? (
                    <div className='box'><div className="border">
                        <img src="https://images.unsplash.com/photo-1633294261565-04234dc78da5?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p>Big Man</p>
                        <small>$4000</small>
                        <button>Buy</button>
                    </div> ) : null}
                </div>
      </div>
  </section>
  )
}

export default Products