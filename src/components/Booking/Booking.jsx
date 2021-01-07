import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
// import DatePicker from "react-modern-calendar-datepicker";


const Booking = () => {
  const [selectedDay, setSelectedDay] = useState(null);
    const { register, handleSubmit } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Full Name</label>
            <input type="text" name="name" value="" />
            <label>Email Address</label>
            <input type="email" name="email" value="" />
            <label>Mobile Number</label>
            <input type="number" name="mobile" value="" />
                <div className="">
              <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      name="dates"  
      
    //   ref={register}
    /> 

  <input type="text" value={selectedDay} name="dates"  ref={register} onChange={setSelectedDay} /> 
                 <input type="submit" />
                </div>
            </form>
        </div>
    )
}
export default Booking;
