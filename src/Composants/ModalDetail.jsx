
import { IoClose } from "react-icons/io5";

function ModalDetail({ visible, onClose, tacheSelectionnee }) {

    const tacheDetail = tacheSelectionnee;
    
    // console.log(tacheDetail.tache);

    if (!visible) return
    
    return (
        <div className="flex justify-center items-center min-h-screen w-full absolute bg-blue-600 bg-opacity-30 ">
            <div className="max-w-[600px] w-full max-h-60 bg-white border rounded-lg shadow-lg">
                <div className="flex justify-between items-center text-white bg-blue-500 px-6">
                    <h3 className="text-xl font-semibold">Detail Tache</h3>
                    <button
                        className="p-1 text-3xl text-gray-500 transition-colors rounded text-white hover:bg-blue-100 hover:bg-opacity-50 hover:m- focus:outline-none"
                        onClick={onClose}
                    >
                        <IoClose />
                    </button>
                </div>
                <div className="flex flex-col gap-10 items-center mt-6 w-full p-6">
                    <div className="flex justify-center w-full">
                        <div className=" mr-5">Nom tâche :</div>
                        <div className=" w-6/12 bg-blue-500 bg-opacity-30 text-center rounded-lg">{tacheDetail.tache}</div>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className=" mr-5">Nom tâche :</div>
                        <div className=" w-6/12 bg-blue-500 bg-opacity-30 text-center rounded-lg">{tacheDetail.desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetail