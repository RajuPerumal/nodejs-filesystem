import fs from 'fs';

export const createFile = (folderpath, filename, content, calbck =()=>{})=>{

    //Check if the folder already exists else create it
    if(!fs.existsSync(folderpath))
    fs.mkdir(folderpath, () => {console.log("Folder Created");});
fs.writeFile(`${folderpath}/${filename}`, content, calbck);
} 

export const getFile = (folderpath,successfn,errfn)=>{
    fs.readdir(folderpath,(err, data)=>{
        if(err)
            errfn();
        else
        successfn(data);
    });
}