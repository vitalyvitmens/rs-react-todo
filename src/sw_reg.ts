if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/rs-react-todo/sw.js') // для хостинга
    // .register('/rs-react-todo/sw.ts') // для локального сервера
    .then((reg) => console.log('Service Worker registered', reg))
    .catch((err) => console.log('Service Worker not registered', err))
}
