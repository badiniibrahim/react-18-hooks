import { useId } from "react";

const UseIdExemple = () => {
  const id = useId();

  return (
    <div className="card">
      <div>
        <label htmlFor={`${id}"-fullName"`}>Full Name</label>
        <input type="text" id={`${id}"-fullName"`} name="Full Name" />
      </div>

      <div>
        <label htmlFor={`${id}"-email"`}>Enter Email</label>
        <input type="email" id={`${id}"-email"`} name="email" />
      </div>

      <input type="submit" value="Submit" />
    </div>
  );
};

export default UseIdExemple;
