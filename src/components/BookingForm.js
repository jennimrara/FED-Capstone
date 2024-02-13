import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

   const [seating, setSeatingOptions] = useState("");
   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset className="formField">
            <h3>Find a table for any occassion</h3>
            <div className="input-group-name">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required/>
            </div>
            <div className="input-group-email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required/>
            </div>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Diners:</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div>
              <label htmlFor="seating-options">Seating Options:</label>
              <select id="seating-options" key={seating} value={seating} onChange={(e) => setSeatingOptions(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Standard</option>
                <option>Outside</option>
              </select>
            </div>
            <div className="btnReceive">
              <input aria-label="On Click" type={"submit"} value={"Lets go"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;