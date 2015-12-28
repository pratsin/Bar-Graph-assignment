fs = require('fs');
var content=[];
var json=[];
var flag;
var index;
var index1;
var index2;
var container=[];
var f=0;
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




                 if(content[index1].indexOf("Agricultural Production Foodgrains")>-1)
               {
                    if(content[index]=="NA")
                     {
                       continue;
                     }
                     else
                     {
                       container=content[0].split(" ");
                      //  if(container.length>5)
                        //{
                          //continue;
                      //  }
                        //else
                        //{
                    var obj={};
                   obj["Production"]=parseInt(content[index]);
                   obj["Crop Type"]=container[container.length-2];
                    //console.log(obj);
                     json.push(obj);
                       //}
                    }
                  }


                 if(j==33)
                 {
                   break;
                 }
 }


          //  console.log(json);
             json.sort(function(a,b) {return b.Production - a.Production});

           fs.writeFile("File(2B).json", JSON.stringify(json) , function(err) {
             if(err) {
                 return console.log(err);
                 }
           });

          });
