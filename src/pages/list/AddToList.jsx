import { useState } from "react";
import { addToListApi } from "../../api/list.js"
import { Link } from "react-router-dom";

const addToList = () => {
  const token = window.localStorage.getItem('token');

  if (!token) {
    throw new Error ('User is not logged in')
  }

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formContent = event.target.elements;
    const product_name = formContent.product_name.value;
    const open_date = formContent.open_date.value;
    const expiry_date = formContent.expiry_date.value;

    try {
        await addToListApi ({
        product_name,
        open_date,
        expiry_date,
        })

        setSuccessMessage('Product added successfully')
        event.target.reset();

        setTimeout(() => setSuccessMessage(''), 5000)
    } catch(error) {
        console.error('Failed to add product')
    }
  }
  return (
    <div className="h-screen grow flex items-center justify-around">
            {/* {successMessage && (
                    <div className="flex items-center justify-center">
                        <div className="bg-gray-300 w-auto border rounded-full fixed-right w-80 text-center">{successMessage}</div>
                    </div>
                )} */}
            <div className="flex flex-col">
                <h1 className="mb-10 text-3xl mb-4 text-center">Add to your list</h1>
                <form onSubmit= {handleSubmit} className="flex flex-col max-w-md mx-auto">

                    <label htmlFor="product_name">Product:</label>
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" id="product_name" name="product_name" placeholder={"eg: Toner"} />
                    
                    <label htmlFor="open_date">Date opened:</label>
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" type="date" id="open_date" name="open_date"/>

                    <label htmlFor="expiry_date">Date expired:</label>
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" type="date" id="expiry_date" name="expiry_date"/>

                    <button type="submit" className="mt-10 mb-2 leading-10 border-gray-500 border px-5 rounded-full bg-black text-white">Submit</button>
                    <Link className="underline text-black text-center" to={"/list"}>Go back to list</Link>
                </form>

                
            </div>
        </div>
      
  )

}
  export default addToList