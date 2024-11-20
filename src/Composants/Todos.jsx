import { BiEdit } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import ModalDetail from "./ModalDetail";
import { useState } from "react";
import ModalEdit from "./ModalEdit";

export const Todos = ({ taches, handleDelete, setTaches }) => {

  const [voirModal, setVoirModal] = useState(false);
  const [voirModalDetail, setVoirModalDetail] = useState(false);
  const [tacheSelectionnee, setTacheSelectionnee] = useState([]);

  // Fonction pour ouvrir/fermer le modal
  const handleOnClose = () => {
    setVoirModal(false);
    setTacheSelectionnee(null);
  }


  // Fonction pour ouvrir/fermer le modal
  const handleOnCloseModalEdit = () => {
    setVoirModalDetail(false);
    setTacheSelectionnee(null);
  }

  // Fonction pour voir le détail d'un tache
  const handleVoirDetails = (index) => {
    // Reccuperer les donnée dans localStorage
    const taches = JSON.parse(localStorage.getItem("taches"));
    setVoirModal(true);

    // Sélectionner là donnée qu'on souhaite
    const resultat = taches.find((obj, id) => id === index);
    setTacheSelectionnee(resultat);
  }

  // Tache pour modification
  const handleEdit = (index) => {
    // Reccuperer les donnée dans localStorage
    const taches = JSON.parse(localStorage.getItem("taches"));

    setVoirModalDetail(true);

    // Sélectionner là donnée qu'on souhaite
    const resultat = taches.find((obj, id) => id === index);
    setTacheSelectionnee(resultat);

  }


  return (
    <>
      <div className='w-7/12 mt-10'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Tâches
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {taches && taches.length > 0 ? (
              taches.map((tache, index) => (
                <tr key={index} className="bg-white text-xl text-gray-900 font-medium">
                  <td scope="row" className="px-6 py-4">
                    {tache.tache}
                  </td>
                  <td className="px-6 py-4">
                    {tache.desc}
                  </td>
                  <td className="flex text-2xl justify-around px-6 py-4">
                    <span
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                      onClick={() => handleVoirDetails(index)}
                    >
                      <FaRegEye />
                    </span>
                    <span
                      className="text-green-800 cursor-pointer hover:text-green-900"
                      onClick={() => handleEdit(index)}
                    >
                      <BiEdit />
                    </span>
                    <span
                      className="text-red-700 cursor-pointer hover:text-red-900"
                      onClick={() => handleDelete(index)}
                    >
                      <MdDeleteForever />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white">
                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                  Aucune tâche disponible
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ModalDetail visible={voirModal} onClose={handleOnClose} tacheSelectionnee={tacheSelectionnee} />
      <ModalEdit visible={voirModalDetail} onClose={handleOnCloseModalEdit}
        setTacheSelectionnee={setTacheSelectionnee} tacheSelectionnee={tacheSelectionnee}
        setTaches={setTaches}
      />
    </>
  )
}
