const formidable = require('formidable');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

export default async (req,res)=>{
    
    
    const form = formidable.IncomingForm();
    const folder = './public';
    form.multiples = false;
    form.maxFileSize = 10 * 1024 * 1024; //10MB
    form.uploadDir = folder;

    form.parse(req, async(err, fields, files)=>{
        console.log('Im in');
        if(err){
            console.log("file parse");
            return res.json({ok:false, msg:"err parsing files"});
        }
    });
      
    return res.end();
}