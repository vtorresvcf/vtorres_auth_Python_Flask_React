const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
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
			

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
