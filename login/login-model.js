
export async function loginUser(email, password){
    const url = 'http://localhost:8000/auth/login';

    const body = {
        username:email,
        password:password
    }
    let response;
    response = await fetch(url,{
        method: "POST",
        body: JSON.stringify(body),
        headers:{
            'Content-type': 'application/json'
        }
    });

    const data = await response.json();
    
}