export const registerUser = async ({ username, email, password}) => {
    const payload = {
        username: username,
        email: email,
        password: password
    };
    console.log("Payload:", payload);
    try {
        const response = await fetch (`${import.meta.env.VITE_API_URL}/register`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email:email,
                password:password
            })
        })

        const data = await response.json();
        console.log(data);
        
        return data;
    } catch (error){
        console.log(error)
    }
}

export const loginUser = async ({ email, password}) => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        console.log('API URL>>>', apiUrl)

        const response = await fetch (`${import.meta.env.VITE_API_URL}/login`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:password
            })
        })

        const data = await response.json();
        
        return data;
    } catch (error){
        console.log(error)
    }
}