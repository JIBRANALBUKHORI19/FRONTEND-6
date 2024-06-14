import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 

function EvenHandling() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [selectedOption, setselectedOption] = useState('S1 Teknik Informatika');
    const [gender, setGender] = useState('Pria');
    const [chAkademik, setchAkademik] = useState(false)
    const [chNonAkademik, setchNonAkademik] =useState(false)
    const [inputValue, setInputValue] = useState('');

    function handleNameChange(event) {
        setName (event.target.value)
    }
    function handleOptionChange(event) {
        setselectedOption(event.target.value);
    }
    function handleGenderChange(event){
        setGender (event.target.value);
    }
    function handleInputChange(event){
        setInputValue(event.target.value)
    }
    return ( 
        <>
        <div className="container mx-8 mt-4">
        <div className="flex flex-wrap">
        <div className="w-full md:w-5/12">
        <h2 className="text-2xl font-semibold">Form Pengisian</h2>
        <hr className="my-2"/>
            <div className="mt-8">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name :
                </label>
                <input 
                type="text" id="name" className="shadow appearance-none border rounded w- full py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Masukkan Nama Anda"
                value={name}
                onChange={handleNameChange}/>
            </div> 

            <div className="mt-8">
                <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                    Program Studi :
                </label>
                <select
                id="program-studi"
                className="shadow appearance-none border rounded w-full py-2 px-3
                    text-gray-700 leading-tight focus:outline focus:shadow-outline"
                value={selectedOption}
                onChange={handleOptionChange}
                >
                    <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                    <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                </select>
            </div>

            <div className="mt-8">
                <span className="block text-gray-700 font-bold mb-2">
                    Gender :
                </span>
                <div className="flex flex-row items-center">
                <label className="inline-flex items-center mr-6">
                <input 
                type="radio"
                className="form-radio text-indigo-600"
                name="gender"
                value="Pria"
                checked={gender === 'Pria'}
                onChange={handleGenderChange}/>
                <span className="ml-2">Pria</span>
                </label>

                <label className="inline-flex items-center">
                <input 
                type="radio"
                className="form-radio text-indigo-600"
                name="gender"
                value="Wanita"
                checked={gender === 'Wanita'}
                onChange={handleGenderChange}/>
                <span className="ml-2">Wanita</span>
                </label>
                </div>
            </div>

            <div className="mt-8">
                <label htmlFor="" className="block text-gray-700 font-bold mb-2">
                    Prestasi :
                </label>
                <div className="flex items-center">
                    <input
                    type="checkbox"
                    name="chAkademik"
                    id="chAkademik"
                    className="form-checkbox"
                    checked={chAkademik}
                    onChange={(e) => setchAkademik(e.target.checked)}/>
                    <label htmlFor="chAkademik" className="ml-1">Prestasi Akademik</label>
                </div>
                <div className="flex items-center mt-2">
                    <input
                    type="checkbox"
                    name="chNonAkademik"
                    id="chNonAkademik"
                    className="form-checkbox"
                    checked={chNonAkademik}
                    onChange={(e) => setchNonAkademik(e.target.checked)}/>
                    <label htmlFor="chNonAkademik" className="ml-2">Prestasi Non Akademik</label>
                </div>
            </div>

            <div className="mt-8">
                <label htmlFor="input-value" className="block text-gray-700 font-bold mb2">
                    Masukan :
                </label>
                <input
                type="text"
                id="input-value"
                className="shadow appearance-none border rounded w-full py-2 px-3
                text-gray-700 leading-tight focus: outline-none focus: shadow-outline"
                placeholder="Ketik Masukan Anda"
                value={inputValue}
                onChange={handleInputChange}/>
            </div>
            </div>

            <div className="w-full md:w-7/12 mt-6 md:mt-0">
                <h2 className="text-2xl font-semibold">Resume</h2>
                <hr className="my-2"/>
                <h3 className="mb-2">Nama Anda : {name}</h3>
                <h3 className="mb-2">Prodi : {selectedOption}</h3>
                <h3 className="mb-2">Gender : {gender}</h3>
                <h3 className="mb-2">Prestasi Akademik : {chAkademik ? "ada": "."}</h3>
                <h3 className="mb-2">Prestasi Non Akademik : {chNonAkademik ? "ada": "."}</h3>
                <h3 className="mb-2">Masukan : {inputValue}</h3>
            </div>
            </div>
        </div>

        <div className="container m-4 ml-4 text-center">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={() => navigate("/Event")}> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            BACK
             </span>
        </button>
        </div>
        </>
     );
}

export default EvenHandling;