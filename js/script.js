if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((registration) => {
        console.log(`Service Worker успешно зарегистрирован с областью ${registration.scope}`);
      })
      .catch((error) => {
        console.log(`Ошибка при регистрации Service Worker: ${error}`);
      });
  });
} else {
  console.log('Service Worker не поддерживается');
}

if (navigator.onLine) {
    console.log("Пользователь в сети");
    document.querySelector('#info').textContent = "Вы в сети"
} else {
    console.log("Пользователь офлайн");
    document.querySelector('#info').textContent = "У вас нет интернета"
}