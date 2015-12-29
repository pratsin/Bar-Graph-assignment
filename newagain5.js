fs = require('fs');
var arr=[];
var index1;
var index;


var container=[];
var container1=[];
var g;
var json=[];
fs.readFile('inp.csv', 'utf8', function (err,data)
{




  if (err)
  {
    return console.log(err);
  }


  function newSpeed(statement)
  {
    for(g=index;g<(len);g++)
    {
      if(content[g]=="NA")
      {
         continue;
     }
         else
         {
          container[g-index][statement]=parseFloat(content[g]);
         }

    }
}
        var content=[];
        var lines = data.split('\r\n');

        var header=lines[0];
        //console.log(header);
        var ele=header.split(',');
        index=ele.indexOf(" 3-1993");
        index1=ele.indexOf("Particulars");
        for(var t=index;t<ele.length;t++)
        {
          var temp={};
          temp["Year"]=ele[t].substring(3,ele[t].length);
          temp["Karnataka"]=0;
          temp["Kerla"]=0;
          temp["AndhraPradesh"]=0;
          temp["TamilNadu"]=0;
          container.push(temp);
        }

             var len = (lines[0].split(',')).length;



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
           if(content[index1].indexOf("Rice Yield Karnataka")!=-1)
              {

                     var statement1="Karnataka";
                       newSpeed(statement1);
           }
         if(content[index1].indexOf("Rice Yield Kerala")>-1)
              {

                var statement1="Kerla";
                  newSpeed(statement1);
           }

           if(content[index1].indexOf("Rice Yield Andhra Pradesh")>-1)
            {

              var statement1="AndhraPradesh";
                newSpeed(statement1);
              }


          if(content[index1].indexOf("Rice Yield Tamil Nadu")>-1)
           {

             var statement1="TamilNadu";
               newSpeed(statement1);
            }

               }



            for(var u=0;u<container.length;u++)
                 {
                if((container[u]["TamilNadu"]==0)&&(container[u]["AndhraPradesh"]==0) && (container[u]["Kerla"]==0) && (container[u]["Karnataka"]==0))
                       {
                         container.splice(u, 1);
                          u--;
                       }
              }

         fs.writeFile("File(4).json", JSON.stringify(container) , function(err) {
          if(err)
          {
              return console.log(err);
           }
            });

        });
