export interface PlanetsInterface {
    geology?: HelperInterface
    images?: PlanetImagesInterface
    internal?: HelperInterface
    overview?: HelperInterface
    name?: string
    radius?: number
    revolution?: number
    rotation?: number
    temperature?: number
    id: number
}

interface HelperInterface {
    content?: string
    source?: string
}

interface PlanetImagesInterface {
    geology?: string
    internal?: string
    overview?: string
}