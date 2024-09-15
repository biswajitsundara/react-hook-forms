import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

function RHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({
    defaultValues: {
      email: 'john@email.com',
      password: '123456' // we can provide any field or all fields
    }
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("email", { message: "This email is already taken" });
      setError("root", { message: "The form is invalid" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Email is required",
          //pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email doesn't include @";
            }
            return true;
          },
        })}
        type="text"
        placeholder="email"
      />
      {errors.email && <div className="error-msg">{errors.email.message}</div>}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have atleast 8 characters",
          },
        })}
        type="text"
        placeholder="password"
      />
      {errors.password && (
        <div className="error-msg">{errors.password.message}</div>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading.." : "Submit"}
      </button>
      {errors.root && <div className="error-msg">{errors.root.message}</div>}
    </form>
  );
}

export default RHookForm;
