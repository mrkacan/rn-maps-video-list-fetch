const KEY = 'AIzaSyDASx4L-ue78qOm0fJQK-8MTRJYGu9whWE'

interface urlProps {
    latitude: number,
    longitude: number
}

export const getYoutubeURL = ({latitude, longitude}: urlProps) => {

    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=${latitude}%2C${longitude}&locationRadius=10mi&order=viewCount&q=surfing&type=video&key=${KEY}`
}

export const getTransformedVideoList = (data: object[]) => {
    const getYoutubeLink = (link: string) => {
        return `https://www.youtube.com/watch?v=${link}`
    }
    let transformedData = [];

    if (!data || !Array.isArray(data)) {
        return []
    }
    transformedData = data.map((item: any) => {
        const {
            id: {
                videoId
            },
            snippet: {
                title,
                description,
                thumbnails: {
                    medium: {
                        url: thumbnail
                    }
                }
            }
        } = item;

        return {
            title,
            description,
            thumbnail,
            url: getYoutubeLink(videoId)
        }
    })
    return transformedData
}
