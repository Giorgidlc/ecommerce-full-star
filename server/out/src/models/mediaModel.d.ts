type Media = {
    media_id: string;
    media_type: 'image' | 'video';
    media_path: string;
    product_id: string | null;
    created_at: string;
};
declare const MediaModel: {
    findAll(): Promise<Media[]>;
    create(media: Media): Promise<Media | null>;
    update(media: Media, id: string): Promise<Media | null>;
    delete(id: string): Promise<boolean>;
};
export default MediaModel;
