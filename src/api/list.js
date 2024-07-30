export const addToListApi = async ({product_name, open_date, expiry_date}) => {

    try {
        const token = window.localStorage.getItem('token');
        
        const response = await fetch (`${import.meta.env.VITE_API_URL}/products`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                product_name: product_name,
                open_date:open_date,
                expiry_date:expiry_date
            })
        })

        const data = await response.json();
        console.log(data)

        return data;
    } catch (error) {
        console.error(error)
    }
}

export const getListApi = async () => {
    try {
        const token = window.localStorage.getItem('token');
        
        const response = await fetch (`${import.meta.env.VITE_API_URL}/products`, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error)
    }
}

export const deleteApi = async (productId) => {
    try {
        const token = window.localStorage.getItem('token');

        const response = await fetch (`${import.meta.env.VITE_API_URL}/products/${productId}`, {
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error)
    }
}