import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, description, image });
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre del Producto</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">URL de la Imagen</label>
        <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Agregar Producto</button>
    </form>
  );
}

export default ProductForm;
