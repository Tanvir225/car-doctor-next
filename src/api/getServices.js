const getServices = async () => {
  const response = await fetch(
    "http://localhost:3000/services/api/getServices"
  );
  const data = await response.json();
  return data;
};

export default getServices;
