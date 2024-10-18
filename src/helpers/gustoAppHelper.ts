import fs from 'fs';
export function encodeURIParams(queryParams: any)
{
 return Object.keys(queryParams).map(key => `${key}=${encodeURIComponent(queryParams[key])}`).join('&');
}

export function writeMessageLogs(message: any, isError: boolean = true)
{
    try{
        
    fs.appendFile(`./Logging_${isError ?  "Error":"Info"}.txt`,(isError ?  "Error":"Info") + ":" + JSON.stringify(message) +'\r\n',function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
    }
    catch(error:any)
    {
        console.log("Message Log error occurred:"+ error);
    }
}