import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="text-center text-danger">
          <h1 class="font-weight-bold mt-3">Contact Us</h1>
        </div>
        <div class="bg-secondary rounded mt-3">
            <h4 class="font-weight-semibold text-light ml-3 pt-3">
                Mobile Number: 8520741963
            </h4>
            <h4 class="font-weight-semibold text-light ml-3 pt-3 pb-3" itemType="mail">
                Email: braziliaitaliaindia@gmail.com
            </h4>
        </div>
        <div class="row align-items-center my-5">
          <form class="align-center">
            <h3 class="font-weight-semibold text-center mb-3">
              You can also fill the below form, our Brazilia Italia team will contact you as soon as possible
            </h3>
            <div class="mb-3">
              <label for="exampleInputname1" class="form-label">Name</label>
              <input type="character" class="form-control" id="exampleInputname1" aria-describedby="emailHelp" placeholder="Enter your Name"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email ID"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputnumber1" class="form-label">Mobile Number</label>
              <input type="tel" class="form-control" id="exampleInputnumber1" placeholder="Enter your Mobile Number"/>
              <div id="numberHelp" class="form-text">We'll never share your Phone number with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputta1" class="form-label" id="rows-4">Message</label>
              <textarea class="form-control" id="exampleInputta1" rows="4" placeholder="Enter your message, share your toughts here!"></textarea>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-danger mb-5 pb-">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
