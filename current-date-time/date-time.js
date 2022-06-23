const fs= require('fs');

let currentDateTime = () => {
    let today = new Date();
    let options = {timeZone: 'Asia/kolkata'};
    let time = today.toLocaleTimeString('en-US', options);
    let date = today.toLocaleDateString('it-IT', options);
    storeDateTime('current-date-time.txt', `${date} ${time}`)
}

let storeDateTime = (filename,data)=> {
    data=`${data}\n`;
    fs.appendFile(filename,data,(err)=>{
        if(err) throw err;
        console.log('Data written in file');
    });
}

module.exports={
    currentDateTime
}