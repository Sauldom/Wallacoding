
export async function createAd(formData){
    const url = `http://localhost:8000/api/ads`;
    const token = localStorage.getItem('token');
    
    const data = await getUserData(token);
    
    const body = {
        author:data.username,
        name:formData.get("name"),
        description:formData.get("description"),
        price:formData.get("price"),
        buy:formData.get("buy"),
        photo:formData.get("photo"),
    }
    let response;
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const data = await response.json()
            throw new Error(data.message);
          }
        } catch(error){
            if (error.message){
                throw error.message
            }else{
                throw error;
            }
        }
}

function parseAuthor(data) {
    return {
      username: data.username
    }
  }

export async function getUserData(token) {
    const url = 'http://localhost:8000/auth/me';
  
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      return parseAuthor(data);
    } catch (error) {
      throw new Error('Error datos del usuario')
    }
  }