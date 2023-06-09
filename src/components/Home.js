import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">

          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Hero Pic"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-bold text-danger">Brazilia Italia</h1>
            <h4 class="font-weight-light">
              Brazilia Italia is an Itallian Restaurant located in local streets of all over India. We offer high quality Italian cusines and dishes at very affordable price. Our Restaurant focused on family audience, college students, parties and for Couples
            </h4>
          </div>
          <hr></hr>
          <div class="col-lg-5 align-items-center text-center mt-4">
            <h1 class="font-weight-bold text-danger">Our Food Menu</h1>
            <div class="col-lg align-items-center my-10">
              <h3>
              <ul class="text-center font-weight-light">
                <li class="list-unstyled">Dish-0</li>
                <li class="list-unstyled">Dish-1</li>
                <li class="list-unstyled">Dish-2</li>
                <li class="list-unstyled">Dish-3</li>
                <li class="list-unstyled">Dish-4</li>
                <li class="list-unstyled">Dish-5</li>
                <li class="list-unstyled">Dish-6</li>
                <li class="list-unstyled">Dish-7</li>
                <li class="list-unstyled">Dish-8</li>
                <li class="list-unstyled">Dish-9</li>
            </ul> </h3> 
            </div>
          </div>
          <div class="col-lg-7 mt-5 mb-4 pb-4">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Menu Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
