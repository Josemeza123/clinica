import React from "react";

const index = () => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead className="bg-gray-50 border-b-2 borde-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">DNI</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Apellido</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Telefono</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Correo</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Edad</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Atendido</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            < td className="p3 text-sm text-gray-700 ">7777777</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">999999999</td>
            < td className="p3 text-sm text-gray-700 ">example@example.com</td>
            < td className="p3 text-sm text-gray-700 ">50</td>
            < td className="p3 text-sm text-gray-700 ">Terapia1</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default index;
