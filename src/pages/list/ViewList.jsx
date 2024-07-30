import { useEffect, useState } from "react";
import { deleteApi, getListApi } from "../../api/list";
import Card from "../../components/Card";
import HeaderLogin from "../../components/HeaderLogin";

const formatDate = (DateString) => {
    const date = new Date(DateString);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
};

// const getProductStatus = (isExpired) => {
//     return isExpired ? "Expired" : "Safe to use";
// };

const rowColour = (status) => {
    return status === 'Expired' ? 'bg-red-300' : 'bg-white';
}


export const ViewList = () => {
    const [data, setData] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    const getList = async () => {
        const response = await getListApi();
        setData(response.data);
    }

    const handleDelete = async (productId) => {
        const userConfirm = window.confirm("Delete this product?")

        if (userConfirm) {
            try {
                await deleteApi (productId);
                setData((prevData) => prevData.filter((item) => item.id !== productId))
            } catch (error) {
                console.error("Failed to delete product")
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        getList();
    }, []);

    const DesktopTable = () => (
        <table className="min-w-full bg-white border mb-20">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="py-2 px-4 border-b">No</th>
                            <th className="py-2 px-4 border-b">Product</th>
                            <th className="py-2 px-4 border-b">Opened Date</th>
                            <th className="py-2 px-4 border-b">Expiry Date</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center py-10">Start adding product</td>
                            </tr>
                        ) : (
                        data.map((item, index) => (
                            <tr key={index} className={`text-center ${rowColour(item.status)}`}>
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{item.product_name}</td>
                                <td className="py-2 px-4 border-b">{formatDate(item.open_date)}</td>
                                <td className="py-2 px-4 border-b">{formatDate(item.expiry_date)}</td>
                                <td className="py-2 px-4 border-b">{item.status}</td>
                                <td className="py-2 px-4 border-b">
                                    {/* <button
                                        className="px-2 py-1 text-white bg-green-500 border-none rounded-full">Edit
                                    </button> */}
                                    <button
                                        onClick = {() => handleDelete(item.id)}
                                        className="px-2 py-1 text-black bg-red-200 hover:bg-red-400 hover:text-white border-none rounded-full">Delete
                                    </button>
                                </td>
                            </tr>))
                        )}
                    </tbody>
                </table>
    )

    const MobileTable = () => (
        <div>
            {data.length === 0 ? (
                <div className="text-center py-10">Start adding product</div>
            ) : (
                data.map((item, index) => (
                    <div key={index} className={`mobile-row text-center ${rowColour(item.status)} py-2 border-b`}>
                        <div>No:{index + 1}</div>
                        <div><strong>Product:</strong> {item.product_name}</div>
                        <div><strong>Opened Date:</strong> {formatDate(item.open_date)}</div>
                        <div><strong>Expiry Date:</strong> {formatDate(item.expiry_date)}</div>
                        <div><strong>Status:</strong> {item.status}</div>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="px-2 py-1 text-black bg-red-200 hover:bg-red-400 hover:text-white border-none rounded-full mt-2">
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );

    return (
        <div className="p-10 h-screen grow items-center justify-around">
            <HeaderLogin/>

            <div className="my-10 flex items-center justify-between">
                <div className="text-2xl">Your Product List</div>
                <div>
                    <a 
                        href="/list/addtolist"
                        className="px-2 py-1 text-white bg-blue-500 border border-blue-500 rounded-full">
                        + New Product 
                    </a>

                </div>

            </div>

            <div className="overflow-x-auto">
                {isMobile ? <MobileTable/> : <DesktopTable/>}
            </div>
            
            
            {/* <Card/> */}

        </div>
       
    )
}