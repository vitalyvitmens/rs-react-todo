if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/rs-react-todo/sw.ts')
    .then((reg) => console.log('Service Worker registered', reg))
    .catch((err) => console.log('Service Worker not registered', err))
}
