const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2b7f8852014c72b473dca0799cd6d967',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;