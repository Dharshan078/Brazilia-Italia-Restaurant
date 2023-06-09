import React from "react";

function Products() {
  return (
    <div className="products">
      <div class="container">
        <div class="text-center mt-4">
          <h1 class="text-danger font-weight-bold">
            Our Products
          </h1>
        </div>
    <div class="row col-md-12 mt-4">
    <div class="col-md-4 mr-0.5 bg-success pb-2 rounded">
      <h1 class="text-center text-light">Stove</h1>
      <img class="img-fluid rounded mb-2" 
      src="https://images.unsplash.com/photo-1527195575508-5b138d14a35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
      alt="Stove-img"></img>
      <button type="button" class="btn btn-light">Buy Stove</button>
    </div>
    <div class="col-md-4 mr-0.5 bg-danger pb-2 rounded">
      <h1 class="text-center text-light">Microwave Oven</h1>
      <img class="img-fluid rounded mb-2" 
      src="https://images.unsplash.com/photo-1584269600519-112d071b35e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      alt="oven-img"></img>
      <button type="button" class="btn btn-light">Buy Microwave Oven</button>
    </div>
    <div class="col-md-4 mr- bg-success pb-2 rounded">
      <h1 class="text-center text-light">Chimeny</h1>
      <img class="img-fluid rounded mb-2" 
      src="https://mishry.com/wp-content/uploads/2020/09/how-kitchen-chimneys-work-1024x682.jpg" 
      alt="chimney-img"></img>
      <button type="button align-center" class="btn btn-light">Buy Chimeny</button>
    </div>
    
    </div>
    <div class="row col-md-12 mt-4 mb-5">
    <div class="col-md-4 mr-0.5 bg-success pb-5 mb-5 rounded">
      <h1 class="text-center text-light">Stove</h1>
      <img class="img-fluid rounded mb-2" 
      src="https://images.unsplash.com/photo-1527195575508-5b138d14a35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
      alt="Stove-img"></img>
      <button type="button" class="btn btn-light">Buy Stove</button>
    </div>
    <div class="col-md-4 mr-0.5 bg-danger pb-5 mb-5 rounded">
      <h1 class="text-center text-light">Microwave Oven</h1>
      <img class="img-fluid rounded mb-2" 
      src="https://images.unsplash.com/photo-1584269600519-112d071b35e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      alt="oven-img"></img>
      <button type="button" class="btn btn-light">Buy Microwave Oven</button>
    </div>
    <div class="col-md-4 mr- bg-success pb-5 mb-5 rounded">
      <h1 class="text-center text-light">Chimeny</h1>
      <img class="img-fluid rounded mb-2" 
      src="https://mishry.com/wp-content/uploads/2020/09/how-kitchen-chimneys-work-1024x682.jpg" 
      alt="chimney-img"></img>
      <button type="button align-center" class="btn btn-light">Buy Chimeny</button>
    </div>
    
    </div>
      </div>
    </div>
  );
}

export default Products;