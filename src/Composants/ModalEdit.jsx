import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const ModalEdit = ({ visible, onClose, tacheSelectionnee, setTaches }) => {
    const tacheEdit = tacheSelectionnee;
    const [newTache, setNewTache] = useState({
        newTache: "",
        newDesc: ""
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTache(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = (e) => {
        e.preventDefault();
        const taches = JSON.parse(localStorage.getItem("taches"))
        // const tab = newTache;
        const newTaches = taches.map((element) => {
           
            if ( element.tache === tacheEdit.tache && element.desc === tacheEdit.desc) {
                element.tache = newTache.newTache;
                element.desc = newTache.newDesc;
            }
            return element;
        });

        localStorage.setItem("taches", JSON.stringify(newTaches));
        setTaches(newTaches);

        onClose()
    };
    // Utiliser useEffect pour mettre à jour l'état quand tacheSelectionnee change
    useEffect(() => {
        if (tacheEdit) {
            setNewTache({
                newTache: tacheEdit.tache || "",
                newDesc: tacheEdit.desc || ""
            });
        }
    }, [tacheEdit]);



    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     const taches = JSON.parse(localStorage.getItem("taches"))

    //     taches.map((tache) => {
    //         if(tache.tache === tacheEdit.newTache && tache.desc === tacheEdit.newDesc){
    //             alert("Bonjour");
    //         }else{
    //             alert("Bondoir")
    //         }
    //     })
    //     onClose(); // Close the modal after editing
    // };


    if (!visible) return
    // console.log(newTache)
    return (
        <div className="flex justify-center items-center fixed w-screen min-h-screen bg-black bg-opacity-10 backdrop-blur-sm">
            <div className="w-6/12 bg-white text-blue">
                <div className="flex justify-between items-center bg-blue-500 p-5">
                    <h1 className="text-xl text-white font-semibold">Modifier une tâche</h1>
                    <button className="text-3xl text-gray-50" onClick={onClose}>
                        <IoClose />
                    </button>
                </div>
                <div className="p-5">
                    <form onSubmit={handleEdit}>
                        <div className="mb-5">
                            <label htmlFor="tache" className="block mb-2 text-2xl font-medium text-gray-90">Tache</label>
                            <input
                                type="text"
                                id="tache"
                                name="newTache"
                                value={newTache.newTache}
                                onChange={handleInputChange}
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
                                name="newDesc"
                                value={newTache.newDesc}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-blue-500 text-gray-900 text-xl rounded-lg block w-full p-2"
                                placeholder="Description"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2 text-center"
                        >
                            Modifier
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit