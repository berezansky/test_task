export interface VideoInfo {
    genre: string[];
    id: number;
    image: string;
    labels: {
        fullhd?: boolean;
        subtitles?: boolean;
        age_restriction?: string;
    };
    production: {
        year: string;
        country: string;
    };
    title: string;
}
