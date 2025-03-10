const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			postSignup: async (formData) => {
				try {
					const res = await fetch(process.env.BACKEND_URL + "/api/signup",{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData),
					});
	
					const data = await res.json()
					setStore(data)
					localStorage.setItem('token', data.token)
					return data
				} catch (error) {
					console.log('error:'+error)
				}
				
			},
			checkToken: async(token) => {
				try{
					const resp = await fetch(process.env.BACKEND_URL + "/api/token", {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						method: 'GET',
					})
					if (resp.status!=200) return false
					const data = await resp.json()
					console.log(data)
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			postLogin: async (formData)=>{
				try {
					const res = await fetch(process.env.BACKEND_URL + "/api/login",{
						method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(formData),
					})
						const data = await res.json()
						setStore(data)
						localStorage.setItem('token', data.token)
						return data
								
				} catch (error) {
					console.log('error:'+error)
				}
			},
			postPrivate: async(token)=>{
				try {
					const res = await fetch(process.env.BACKEND_URL + "/api/private",{
							headers: {
								'Content-Type': 'application/json',
								'Authorization': `Bearer ${token}`
							},
							body: JSON.stringify(formData),
					})
						if(res.status!=200) return false
						const data = await res.json()
						setStore(data)
						localStorage.setItem('token', data.token)
						return data
								
				} catch (error) {
					console.log('error:'+error)
				}
			},
			logOut: () =>{
				localStorage.removeItem("token")
				setStore({msg:"", token:"", success:"", user:""})
				return true
			}
			
		}
	};
};

export default getState;
