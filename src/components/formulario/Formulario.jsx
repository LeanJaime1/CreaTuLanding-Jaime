import React, { useState } from 'react';
import './formulario.css'; 
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Formulario = ({ emptyCart }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '' 
  });

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "¡Compra realizada con éxito!",
      icon: "success",
    }).then(() => {
      emptyCart(); 
      navigate('/'); 
    });
  };

  return (
    <div className="form-container">
      <h1>Formulario de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='nombre'>Nombre:</label>
          <input type='text' id='nombre' name='nombre' value={formData.nombre} onChange={handleFormChange} required />
        </div>
        <div className="form-group">
          <label htmlFor='direccion'>Dirección:</label>
          <input type='text' id='direccion' name='direccion' value={formData.direccion} onChange={handleFormChange} required />
        </div>
        <div className="form-group">
          <label htmlFor='telefono'>Teléfono:</label>
          <input type='text' id='telefono' name='telefono' value={formData.telefono} onChange={handleFormChange} required />
        </div>
        <div className="form-group">
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' value={formData.email} onChange={handleFormChange} required />
        </div>
        <button type='submit' className='button-price'>
          <span>Enviar</span>
        </button>
      </form>
    </div>
  );
};

export default Formulario;
