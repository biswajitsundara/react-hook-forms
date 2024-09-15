import React, { useState } from "react";
import {FormData} from '../../types/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SimpleForm: React.FC = ()=>{

   const [formData , setFormData] = useState<FormData>({
     
    firstname: '',
    lastname: '',
    age: 18,
    email: '',
    hobbies: [{name: ''}],
    address: {city: '', state: ''},
    startDate: new Date(),
    subscribe: false

   });

  const[errors, setErrors] = useState<any>();
  const[isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="firstname" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="">Age</label>
        <input type="number" name="age" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">Start Date</label>
        <DatePicker selected={formData.startDate} onChange={(date: Date | null)=> setFormData({...formData, startDate: date || null})}/>
      </div>


      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
