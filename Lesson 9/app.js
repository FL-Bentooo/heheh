const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


function handleKeyPress(event) {
    if (event.key === "Enter") searchByCity();
}
async function searchByCity() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return showError("Vui lòng nhập tên thành phố!");
    const url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=vi`;
    await fetchWeather(url);
}
function getWeatherByLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const url = `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=vi`;
        fetchWeather(url);
    }, () => showError("Không thể lấy vị trí!"));
}
async function fetchWeather(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        showWeather(data);
    } catch (err) {
        showError("Lỗi khi tải dữ liệu!");
    }
}
function showWeather(data) {
    if (!data.main) return (document.getElementById("weatherResult").innerHTML = "Không tìm thấy thành phố!");
    document.getElementById("weatherResult").innerHTML = `
<b>${data.name}</b><br>
🌡 Nhiệt độ: ${data.main.temp}°C<br>
☁ Trạng thái: ${data.weather[0].description}
`;
}
function showError(msg) {
    document.getElementById("weatherResult").innerHTML = msg;
}