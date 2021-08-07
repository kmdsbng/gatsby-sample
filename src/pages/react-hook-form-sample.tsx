import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"

type Inputs = {
  example: string,
  exampleRequired: string,
};

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const onError: SubmitErrorHandler<Inputs> = errors => { console.log('error:'); console.log(errors)}

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input defaultValue="test" {...register("example")} />

      <br />

      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <br />

      <input type="submit" />
    </form>
  );
}

export default App;
