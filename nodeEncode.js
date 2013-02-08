
var fs = require("fs");

var file = process.argv[2];
var comment = process.argv[3];

fs.readFile(file,function(err,data){
    if (err) throw err;
    var buf = new Buffer(data);
    var newComment=0;
    for(var offset=0;offset<data.length;offset++){
        if (buf.readUInt16BE(offset) == 0xFFFE){
            console.log("comment marker found");
            newComment=offset;
            break;
        }
        if (buf.readUInt16BE(offset) == 0xFFD9){
            newComment=offset-1;
            break;
        }       
    }
    var newBuf = new Buffer(Buffer.byteLength(comment));
    console.log("comment:"+comment+",newBuf length:"+newBuf.length);
    var start = buf.slice(0,newComment);
    newBuf.write(comment);
    console.log("newBuf:"+newBuf.toString());
    var end = buf.slice(newComment);
     console.log("end:"+newBuf.toString().slice(20));
    var outBuf = Buffer.concat([start,newBuf,end]);
   
    
    fs.writeFile('./image_edited.jpg',outBuf, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
});
