import { useState } from "react";

export default function Upload(){
    const [file, setFile] = useState(null);

    async function uploadFile(e){
        e.preventDefault();
        if (!file || !file[0]) return;

        const only = file[0];
        const form = new FormData();
        form.append('file', only, only.name);

        try {
            const req = await fetch('/api/fileupload', {
                method : 'post',
                body: form
            });
            const res = await req.json();
            if (!res.ok) alert('upload failed');
        } catch (e) {
            alert('upload failed');
        }
    }

    return(
        <div>
            <form onSubmit={uploadFile} encType="multipart/form-data">
            <input type="file" name="filetoupload" onChange={(e)=>{setFile(e.target.files)}}/><br/>
            <input type="submit" value="Upload"/>
            </form>
        </div>
    );
}
