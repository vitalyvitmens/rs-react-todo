if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/index.html/sw.js', { scope: '/index.html/' })})}