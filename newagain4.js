fs = require('fs');
var content=[];
var json=[];

var flag=0;
var index1;
var index;
var index2;
var p;
var f=0;
var newar={};
var k=0;

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

          index=ele.indexOf(" 3-1993");
         index1=ele.indexOf("Particulars");



        var len = (lines[0].split(',')).length;
        for (var i = index; i < len; i++)
        {

          newar[ele[i]]= 0;
           }

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


                if(content[index1].indexOf("Commercial")>-1)
                {

                  for(var n=index; n<((content.length)-1); n++)
                  {
                      if(content[n]=="NA")
                      {
                        content[n]=0;

                    newar[ele[n]]=newar[ele[n]]+content[n];

                      }
                      else
                      {

                    newar[ele[n]]=newar[ele[n]]+parseFloat(content[n]);

                     }
                    }
                   }

                 }




         for(var t=index;t<len;t++)
             {
                 if(newar[ele[t]]==0)
               {
                 continue;
               }
               else
               {
                var obj={};
               obj["Year"]=ele[t];
               obj["Sum"]=newar[ele[t]];
               json.push(obj);
             }
           }

    fs.writeFile("File(3).json", JSON.stringify(json) , function(err) {
     if(err)
     {
         return console.log(err);
      }
       });
      });
