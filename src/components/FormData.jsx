import { useState, useEffect } from 'react';

function FormData({ patients, setPatients }) {
  const [pet, setPet] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [dataLoad, setDataLoad] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion de formulario
    if ([pet, owner, email, dataLoad, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    // crear nuevo paciente
    const newPatient = {
      pet,
      owner,
      email,
      dataLoad,
      symptoms,
    };
    // agregar nuevo paciente al state
    setPatients([...patients, newPatient]);
    // limpiar el formulario
    setPet('');
    setOwner('');
    setEmail('');
    setDataLoad('');
    setSymptoms('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Segimiento de Paciente
      </h2>
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y{' '}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <div className="bg-red-600 text-white text-center p-3 uppercase font0bold mb-3 rounded-md">
            <p>Todos los campos son obligatorio</p>
          </div>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet"
          >
            Nombre Mascota
          </label>
          <input
            id="pet"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Nombre de la mascota"
            value={pet}
            onChange={(e) => {
              setPet(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner"
          >
            Nombre Propietario
          </label>
          <input
            id="owner"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Nombre del Propietario"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email Contacto Propietario
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="correo@correo.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="dateLoad"
          >
            Fecha de Alta
          </label>
          <input
            id="dateLoad"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            value={dataLoad}
            onChange={(e) => {
              setDataLoad(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Describe los Síntomas"
            value={symptoms}
            onChange={(e) => {
              setSymptoms(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value="Agregar Pacient"
          className="w-full mt-5 bg-indigo-600 text-white p-3 rounded-md uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-color"
        />
      </form>
    </div>
  );
}

export default FormData;
