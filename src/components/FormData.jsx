import { useState, useEffect } from 'react';

function FormData() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Segimiento de Paciente
      </h2>
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      <form className="bg-white shadow-sm rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet"
          > Nombre Mascota</label>
          <input
            id="pet"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " placeholder="Nombre de la mascota" />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner"
          > Nombre Propietario</label>
          <input
            id="owner"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " placeholder="Nombre del Propietario" />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >Email Contacto Propietario</label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="correo@correo.com" />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date-load"
          >Fecha de Alta</label>
          <input
            id="date-load"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >Síntomas</label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Describe los Síntomas"
          />
        </div>
        <input type="submit" value="Agregar Pacient" className="w-full mt-5 bg-indigo-600 text-white p-3 rounded-md uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-color" />
      </form>
    </div>
  )
}

export default FormData
