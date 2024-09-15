import React, { useState } from "react";

function BasicForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });
    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be 8 characters" });
    }

    console.log("Form Submitted..");
  };

  return <form>
     <input type="text" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
     {errors.email && <div className="error-msg">{errors.email}</div>}
     <input type="text" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
     {errors.password && <div className="error-msg">{errors.password}</div>}
     <button type="submit" onClick={handleSubmit}>Submit</button>
  </form>;
}

export default BasicForm;
