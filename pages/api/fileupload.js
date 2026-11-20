import formidable from 'formidable';

// formidable needs the raw request body
export const config = {
    api: { bodyParser: false },
};

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false, msg: 'method not allowed' });
    }

    // NOTE: writing into ./public only works locally; on Vercel the file system is read-only.
    const form = formidable({
        uploadDir: './public',
        keepExtensions: true,
        multiples: false,
        maxFileSize: 10 * 1024 * 1024, //10MB
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error('file parse', err);
            return res.status(400).json({ ok: false, msg: 'err parsing files' });
        }
        return res.status(200).json({ ok: true, files: Object.keys(files) });
    });
}
