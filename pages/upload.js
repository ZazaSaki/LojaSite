import { useState } from "react";
import { readExcel } from "../src/execelRd";



export default function upload(){
    const [file, setFile] = useState(null);
    
    async function uploadFile(e){
        e.preventDefault();
        
        const only = file[0];
        readExcel(file);
        const form = new FormData();
        form.append('file', only, only.name);

        try {
            const req = await fetch('/api/fileupload', {
                method : 'post',
                body: form
            });

            console.log('request',req);

            //const res = await req.json();
            //console.log(res);
            //console.log('reasponse', res);

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