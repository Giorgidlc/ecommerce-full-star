import { openConnectionDb, closeConnectionDb } from '../config/db';

type Media = {
    media_id: string;
    media_type: 'image' | 'video';
    media_path: string;
    product_id: string | null;
    created_at: string;
};

const MediaModel = {
    async findAll(): Promise<Media[]> {
        const connection = await openConnectionDb();
        const [media] = await connection.query('SELECT * FROM Media');
        await closeConnectionDb(connection);
        return media as Media[];
    },

    async create(media: Media): Promise<Media | null> {
        const connection = await openConnectionDb();
        const { media_type, media_path, product_id } = media;
        const [newMedia] = await connection.query(
        'INSERT INTO Media (media_type, media_path, product_id) VALUES (?, ?, ?)',
        [media_type, media_path, product_id]
        );
        await closeConnectionDb(connection);

        if (newMedia && 'insertId' in newMedia) {
            return { ...media, media_id: String(newMedia.insertId) };}
        return null;
    },
    
    async update(media: Media, id: string): Promise<Media | null> {
        const connection = await openConnectionDb();
        const { media_type, media_path, product_id } = media;
        const [updatedMedia] = await connection.query(
        'UPDATE Media SET media_type = ?, media_path = ?, product_id = ? WHERE media_id = ?',
        [media_type, media_path, product_id, id]
        );
        await closeConnectionDb(connection);

        if (Array.isArray(updatedMedia) && updatedMedia.length > 0) {
        return media;
        } else {
        return null;
        }
    },

    async delete(id: string): Promise<boolean> {
        const connection = await openConnectionDb();
        const [deletedMedia] = await connection.query('DELETE FROM Media WHERE media_id = ?', [id]);
        await closeConnectionDb(connection);

        return Array.isArray(deletedMedia) && deletedMedia.length > 0;
    },
};

export default MediaModel;
