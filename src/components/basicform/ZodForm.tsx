import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "john@email.com",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="text" placeholder="email" />
      {errors.email && <div className="error-msg">{errors.email.message}</div>}
      <input {...register("password")} type="text" placeholder="password" />
      {errors.password && (
        <div className="error-msg">{errors.password.message}</div>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading.." : "Submit"}
      </button>
    </form>
  );
}

export default ZodForm;
