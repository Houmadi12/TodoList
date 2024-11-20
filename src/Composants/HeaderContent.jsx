
import { useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import ModalAdd from "./ModalAdd";

export const HeaderContent = ({addTache,setTaches, taches}) => {
  const [recherche, setRecherche] = useState('');
  const [voirModal, setVoirModal] = useState(false);

// // recherche
  const tachesFiltrees = taches.filter(tache => 
    tache.tache.toLowerCase().includes(recherche.toLowerCase()) || 
    tache.desc.toLowerCase().includes(recherche.toLowerCase())
);

if(tachesFiltrees){
  setTaches(tachesFiltrees)
}
// setTaches(tachesFiltrees);
  // Fonction pour ouvrir/fermer le modal
  const handleOnClose = () => setVoirModal(false)
  const handleOpene = () => setVoirModal(true)

  
  return (
    <>
      <form className="md:w-3/5">
        <div className="flex justify-between items-center gap-8 w-full px-3 py-2">
          <div className="flex justify-center items-center w-100 px-2 py-1">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hidden" htmlFor="tache">Recherche</label>
            <input 
              className="flex h-10 w-full rounded-l-md border border-3 border-blue-500 px-3 py-3 text-xl" 
              id="recherche" placeholder="Recherche ..." name="recherche"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
               />
            <div className="bg-blue-500 rounded-r-md px-3 py-3 text-white text-lg"><VscSearch /></div>
          </div>
          <div className="w-28">
            <button className="flex h-10 w-full items-center justify-center rounded-md bg-blue-500 border border-white px-4 py-2 text-md font-medium text-white transition-colors hover:bg-blue-400"
              type="button"
              onClick={handleOpene}
            >Ajouter</button>
          </div>
        </div>
      </form>
      <ModalAdd visible={voirModal} onClose={handleOnClose} addTache={addTache}/>
    </>
  )
}
