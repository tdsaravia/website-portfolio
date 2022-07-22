import './src/index.css';

export const onClientEntry = () => {
document.getElementById('loader-wrapper').style.display = "block";
}
export const onPreRouteUpdate = () => {
document.getElementById('loader-wrapper').style.display = "block";
}
export const onRouteUpdateDelayed = () => {
document.getElementById('loader-wrapper').style.display = "block";
}
export const onRouteUpdate = () => {
setTimeout(() => {
document.getElementById('loader-wrapper').style.display = "none";
}, 2000);
}