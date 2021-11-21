export const goToHome = (history) => {
    history.push ('/')
}

export const goToDetail = (history, id) => {
    history.push (`/detail/${id}`)
}

export const goToEpisodes = (history, id) => {
    history.push (`/episode/${id}`)
}