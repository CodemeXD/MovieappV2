import React, { useState } from "react";

export const MyForm = () => {
  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    rate: "",
    poster: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... rest of your form components */}
    </form>
  );
};