import React, { useState } from "react";
import { Button } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    retirementSavings: "",
    age: "",
    email: "",
    phoneNumber: "",
    textMeReport: false,
  });

  const [errors, setErrors] = useState({}); // Estado para almacenar los mensajes de error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Eliminar mensaje de error al editar el campo
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validación de campos requeridos
    const errorMessages = {};
    for (const field in formData) {
      const value = formData[field];
  
      // Verificar si el campo es un select y su valor seleccionado es una cadena vacía
      if (typeof value === "string" && value.trim() === "") {
        errorMessages[field] = "Please complete this field.";
      }
  
      // Verificar si el campo es un checkbox y no está seleccionado
      if (field === "textMeReport" && !value) {
        errorMessages[field] = "Please check this field.";
      }
    }
  
    // Si hay errores, mostrar los mensajes y detener el envío del formulario
    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
      return;
    }
  
    // Si no hay errores, enviar el formulario o realizar otras acciones
    console.log(formData);
  };

  return (
    <form className="bg-primary text-white p-3 rounded-lg" onSubmit={handleSubmit}>
        <div className="text-center">
          <h2 className="form-title">Download Your Free Annuity Ranking Report</h2>
          <p>(Updated July 2023)</p>
          <p className="form-text mt-2 mb-2">Get the most up-to-date highest-paying annuities available right now. See the current annuity rates, guaranteed annual income, fees, riders, bonuses, and more from the highest-paying annuities in 2023.</p>
        </div>
      <div className="flex flex-col">
          <div className="flex flex-col mt-2">
            <label>
              First Name *
            </label>
            <input className="rounded px-4 py-2"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="text-red-500 mt-1">{errors.firstName}</span>}
          </div>
          <div className="flex flex-col mt-2">
            <label>
              Last Name *
            </label>
            <input className="rounded px-4 py-2"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="text-red-500 mt-1">{errors.firstName}</span>}
          </div>
          <div className="flex flex-col mt-2 relative">
            <label>How much have you saved for retirement *</label>
            <select
              className="rounded px-4 py-2 appearance-none select-black-options"
              name="retirementSavings"
              value={formData.retirementSavings}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="$10,000">$10,000</option>
              <option value="$20,000">$20,000</option>
              <option value="$30,000">$30,000</option>
            </select>
            <FontAwesomeIcon
              icon={faSortDown}
              className="absolute right-0 mt-2 mr-2 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
            />
            {errors.firstName && <span className="text-red-500 mt-1">{errors.firstName}</span>}
          </div>
          <div className="flex flex-col mt-2 relative">
            <label>Age *</label>
            <select
              className="rounded px-4 py-2 appearance-none select-black-options"
              name="age"
              value={formData.age}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="18">18</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            <FontAwesomeIcon
              icon={faSortDown}
              className="absolute right-0 mt-2 mr-2 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
            />
            {errors.firstName && <span className="text-red-500 mt-1">{errors.firstName}</span>}
          </div>
          <div className="flex flex-col mt-2">
            <label>
              Email *
            </label>
            <input className="rounded px-4 py-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.firstName && <span className="text-red-500 mt-1">{errors.firstName}</span>}
          </div>
          <div className="flex flex-col mt-2">
            <label>
              Cell Phone Number *
            </label>
            <input className="rounded px-4 py-2"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.firstName && <span className="text-red-500 mt-1">{errors.firstName}</span>}
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="textMeReport"
              checked={formData.textMeReport}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-secondary cursor-pointer"
            />
            <span className="ml-2 ">Yes, text me the FREE report! (OPTIONAL)</span>
          </div>
          <Button type="submit" className="bg-secondary hover:bg-yellow-600 my-4">
            Get My Annuity Report
          </Button>
          <span className="text-center text-warning">* Mandatory fields. Our exclusive Annuity Ranking Report™ is absolutely free and will be available for you to
download IMMEDIATELY. We will never share your personal information.</span>
      </div>

    </form>
  );
};

export default Form;
