export const consultarClima = async (lat, long) => {
  const resp = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e88f0c7f64784aa7b85133248242705&q=${lat},${long}&aqi=no`
  );
  const data = await resp.json();
  return data;
};
