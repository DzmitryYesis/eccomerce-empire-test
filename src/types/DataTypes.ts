export type ResponseCharactersType = {
    info: InfoType,
    data: DataType[]
}

export type InfoType = {
    count: number,
    nextPages: number,
    previousPage: null | string,
    totalPages: number
}

export type DataType = {
    allies: string[]
    createdAt: string
    enemies: string[]
    films: string[]
    imageUrl: string
    name: string
    parkAttractions: []
    shortFilms: []
    sourceUrl: string
    tvShows: string[]
    updatedAt: string
    url: string
    videoGames: []
    __v: number
    _id: number
}