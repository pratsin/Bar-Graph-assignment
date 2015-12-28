fs = require('fs');
var content=[];
var json=[];
var flag;
var index;
var index2;
var container=[];
var f=0;
var index1;
fs.readFile('inp.csv', 'utf8', function (err,data)
{
  if (err)
  {
    return console.log(err);
  }


        var content=[];
        var lines = data.split('\r\n');

        var header=lines[0];
        //console.log(header);
        var ele=header.split(',');
        // console.log(ele);

          index=ele.indexOf(" 3-2013");
          index1=ele.indexOf("Particulars");



          for(var j=1;j<lines.length;j++)
          {
               content=lines[j].split(',');
              for(var k=0;k<content.length;k++)
               {
            if(content[k].indexOf("Annual")>-1)
              {
                content[k]=content[k]+content[k+1];

              for(var l=k+1;l<((content.length)-1);l++)
                 {
                content[l]=content[l+1]
                 }
                }
              }

          if(content[index1].indexOf("Agricultural Production Oilseeds")>-1)
          {
                   if(content[index]=="NA")
                    {
                     //content[index]="0";
                    continue;
                   }
                   else
                   {
                     var obj={};
                     container=content[index1].split(" ");
                     obj["Production"]=parseFloat(content[index]);
                     obj["Crop Type"]=container[container.length-2];
                     json.push(obj);
                    }
                   }
                 }


          json.sort(function(a,b) {return b.Production - a.Production});
           fs.writeFile("File(2A).json", JSON.stringify(json) , function(err) {
             if(err) {
                 return console.log(err);
              }
           });
        });
