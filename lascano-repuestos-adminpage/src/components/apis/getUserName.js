async function getUserName() {
  try {
      const response = await fetch('/api/getUserName', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error('Error al obtener el nombre del usuario.');
      }


      console.log('Respuesta recibida:', response.json());
      const data = await response.json();
      return { nombre: data.nombre, apellido: data.apellido };
  } catch (error) {
      console.error('Error en getUserName:', error);
      throw error;
  }
}

export { getUserName };
