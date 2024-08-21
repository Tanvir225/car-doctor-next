

const singleService = async(id) => {
   const result = await fetch(`http://localhost:3000/services/api/${id}`)
   const data = await result.json()
   return data
};

export default singleService;