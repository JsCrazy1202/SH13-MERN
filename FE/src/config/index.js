export const API_URL = `https://beehives.grwth.hk/api`;
export const HOST_URL = `https://${window.location.hostname}:8081`;

export const convertApiUrl = (url, param="") => {
  const lng = window.localStorage.getItem("i18nextLng").slice(0, 2);
  let finalUrl = API_URL+"/"+url;
  if (param !== "") {
    finalUrl = finalUrl+"/"+param;
  }
  finalUrl = finalUrl+"?lng="+lng;
  return finalUrl;
}
