let fs=require('fs');
let path=require('path');
let common_data={};
let data=fs.readFileSync(path.resolve("config.json"));
common_data=JSON.parse(data);
console.log(common_data);
module.exports=common_data;