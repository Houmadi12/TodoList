import { IoClose } from "react-icons/io5";

const ModalAdd = ({ visible, onClose, addTache }) => {
   

    if (!visible) return

    // fonction de controle de saisie
    const handleAddNewTache = (e) => {
        e.preventDefault()  

        const form = e.target;
        const element = form.elements;

        const newTache = {
            tache : element.tache.value,
            desc : element.desc.value
        }

        addTache(newTache);
        // console.log(newTache)
    }




    return (
        <div className="flex justify-center items-center fixed w-screen min-h-screen bg-black bg-opacity-10 backdrop-blur-sm">
        <div className="w-6/12 bg-white text-blue">
            <div className="flex justify-between items-center bg-blue-500 p-5">
                <h1 className="text-xl text-white font-semibold">Ajouter une tâche</h1>
                <button className="text-3xl text-gray-50" onClick={onClose}>
                    <IoClose />
                </button>
            </div>
            <div className="p-5">
                <form onSubmit={handleAddNewTache}>
                    <div className="mb-5">
                        <label htmlFor="tache" className="block mb-2 text-2xl font-medium text-gray-90">Tache</label>
                        <input 
                            type="text" 
                            id="tache" 
                            className="bg-gray-50 border border-blue-500 text-gray-900 text-xl rounded-l block w-full p-2"
                            placeholder="Tache"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="desc" className="block mb-2 text-2xl font-medium text-gray-90">Description</label>
                        <input 
                            type="text"
                            id="desc"
                            className="bg-gray-50 border border-blue-500 text-gray-900 text-xl rounded-lg block w-full p-2" 
                            placeholder="Description" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2 text-center"
                    >
                        Enregistrer
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default ModalAdd