export const getData = () => fetch('https://api.disneyapi.dev/character').then(response => response.json())