const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result) =>{

    if(err){
        console.log(err);
        return;
    }
    const first = result;
    console.log("First",first);

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            return;
        }
        const second = result;
        console.log("Second",second);
        writeFile('./content/result-async.txt',`Here is the first file text  ${first} and  second file text${second} `, {flag: 'a'},(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
}



)