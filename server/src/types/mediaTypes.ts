type HttpMediaResponse<T> = {
    status: number;
    headers: Record<string, string>;
    body: {
    media: T[];
    };
};

type Media = {
    media_id: string;
    media_type: 'image' | 'video';
    media_path: string;
    product_id: string | null;
    created_at: string;
};
    
export { Media, HttpMediaResponse };
    