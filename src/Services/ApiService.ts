import axios from 'axios';

class ApiService {
    private static s: ApiService | null = null;

    private baseUrl = 'https://fedevofferapi-info3.b4a.run';

    public static get service(): ApiService {
        if (ApiService.s === null) {
            ApiService.s = new ApiService();
        }

        return ApiService.s;
    }

    public getAllVideos = async () => {
        const videos = await axios.get('/list', { baseURL: this.baseUrl })

        return videos.data
    }

    public getVideo = async (id: string) => {
        const video = await axios.get(`/item/${id}`, { baseURL: this.baseUrl })

        return video.data
    }

    public getComments = async (id: string) => {
        const video = await axios.get(`/comments/${id}`, { baseURL: this.baseUrl })

        return video.data
    }

    public sendComment = async (id: string) => {
        const video = await axios.post(`/comments/post/${id}`, {}, {
            baseURL: this.baseUrl,
            headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

        return video.data
    }
}

export const apiService = ApiService.service;
