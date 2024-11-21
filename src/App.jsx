import { useEffect, useState } from "react"
import { HeaderContent } from "./Composants/HeaderContent"
import { Todos } from "./Composants/Todos"

function App() {
  const [taches, setTaches] = useState([]);
  const [message, setMessage] = useState("")

  // Fonction pour ajouter une tâche
  const handleAddTache = (newTache) => {

    try {
      // Récupérer les tâches existantes
      let existingTaches = [];
      const storedTaches = localStorage.getItem("taches");

      if (storedTaches) {
        existingTaches = JSON.parse(storedTaches);
        if (!Array.isArray(existingTaches)) {
          existingTaches = [];
        }
      }

      // Ajouter la nouvelle tâche
      const updatedTaches = [...existingTaches, newTache];

      // Sauvegarder dans le localStorage
      localStorage.setItem("taches", JSON.stringify(updatedTaches));

      // Mettre à jour l'état
      setTaches(updatedTaches);

      // Optionnel: Confirmer l'ajout
      setMessage("Tâche ajoutée avec succès!");

    } catch (error) {
      console.error("Erreur lors de l'ajout de la tâche:", error);
      alert("Erreur lors de l'ajout de la tâche");
    }
  }

  // Fonction pour afficher les taches
  const displayTaches = () => {
    try {
      const storedTaches = localStorage.getItem("taches");
      if (storedTaches) {
        const parsedTaches = JSON.parse(storedTaches);
        setTaches(Array.isArray(parsedTaches) ? parsedTaches : []);
      } else {
        setTaches([]);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des tâches:", error);
      setTaches([]);
    }
  };

  // Fonction pour suppromer des tâches
  const handleDelete = (index) => {
    try {
      const storedTaches = JSON.parse(localStorage.getItem("taches")) || [];
      storedTaches.splice(index, 1);
      localStorage.setItem("taches", JSON.stringify(storedTaches));
      // Rafraîchir l'affichage après la suppression
      displayTaches();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      alert("Erreur lors de la suppression de la tâche");
    }
  };
 




  useEffect(() => {
    const localTaches = JSON.parse(localStorage.getItem("taches"))

    if (!localTaches) {
      setTaches(localTaches);
    } else {
      setTaches([]);
    }

    displayTaches();
  }, [])

  // console.log(taches);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className=" text-3xl font-bold mb-10 ">Gestion des tâches</h1>
      <HeaderContent addTache={handleAddTache} setTaches={setTaches} taches={taches} message={message} />
      <Todos taches={taches} handleDelete={handleDelete} setTaches={setTaches} />
    </div>
  )
}

export default App
