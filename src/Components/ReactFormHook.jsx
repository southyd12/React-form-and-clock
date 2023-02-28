import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const initialValues = {
  username: " ",
  email: " ",
  age: " ",
};

const schema = yup.object({
  username: yup.string().required().min(2, 'Username must be a minimum of two characters').max(20, 'Username must be a maximum of 20 characters').lowercase().trim(),
  email: yup.string().email().required().max(49, 'Email must be less than 50 characters'),
  age: yup.number().required().positive().integer(),
});

function ReactFormHook() {
  const { register, handleSubmit, reset, watch, formState: { errors, isDirty, isValid, isSubmitting }, formState } = useForm({mode: 'onChange', defaultValues: initialValues, resolver: yupResolver(schema)});

  useEffect(() => {
    console.log("formState", formState);
    console.log("errors", errors);
  });

  const submitHandler = (values) =>  { console.log(values); reset();};

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="username" className="field-name">Username:</label>
        <input type='text' {...register('username', {required: true})}/>
        {errors.username === 'required' && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label htmlFor="email" className="field-name">Email:</label>
        <input type='text' {...register('email', {required: true})}/>
        {errors.email === 'required' && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="age" className="field-name">Age:</label>
        <input type='text' {...register('age', {required: true})}/>
        {errors.age === 'required' && <span>This field is required</span>}
      </div>
      <div>
        <button type='reset' onClick={reset}>Reset</button>
        <button type='submit' disabled={isSubmitting || (!isValid || !isDirty)}>Submit</button>
      </div>
    </form>
  );
}

export default ReactFormHook