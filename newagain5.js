fs = require('fs');
var arr=[];
var container=[];
var container1=[];
var g;
var karnataka=[];
var kerla=[];
var andhra=[];
var tamil=[];
var main=[];
var json=[];
var jazz=[];
var newjazz=[];
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
         for(var i=0;i<(ele.length);i++)
         {
           if(ele[i].indexOf(" 3-1993")>-1)
           {
                index = i;
           }
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

            for(var m=0;m<(len);m++)
            {
               k=1;
              if(content[m].indexOf("Rice Yield Karnataka")>-1)
              {
                    karnataka[0]="Karnataka";
                for(g=index;g<(len-1);g++,k++)
                {
                  if(content[g]=="NA")
                      {
                          k--;
                      continue;
                     }
                     else{
                       karnataka[k]=ele[g]+" , "+content[g];
                     }


                }
                        main.push(karnataka);

              }



              if(content[m].indexOf("Rice Yield Kerala")>-1)
              {
                    kerla[0]="Kerla";
                for(g=index;g<(len-1);g++,k++)
                {
                  if(content[g]=="NA")
                  {
                          k--;
                      continue;
                     }
                     else{
                       kerla[k]=ele[g]+" , "+content[g];
                     }

                }
                        main.push(kerla);


            }

           if(content[m].indexOf("Rice Yield Andhra Pradesh")>-1)
            {
                  andhra[0]="Andhra Pradesh";
              for(g=index;g<(len-1);g++,k++)
              {
                if(content[g]=="NA")
                    {
                        k--;
                    continue;
                   }
                   else{
                     andhra[k]=ele[g]+" , "+content[g];
                   }

              }
                      main.push(andhra);

          }


          if(content[m].indexOf("Rice Yield Tamil Nadu")>-1)
           {
                tamil[0]="Tamil Nadu";
             for(g=index;g<(len-1);g++,k++)
             {
                    if(content[g]=="NA")
                        {
                          k--;
                        continue;
                       }
                       else{
                         tamil[k]=ele[g]+" , "+content[g];
                       }
             }
                     main.push(tamil);

         }


              break;
          }


        }
          for(i=0;i<1;i++)
          {
            for(j=1;j<11;j++)
             {
               h=0;
              //console.log(main);
               container=main[i][j].split(',');
                  {
                    for(k=0;k<4;k++)
                    {
                      for(var l=1;l<11;l++)
                       {
                         //console.log(k,l);
                         container1=main[k][l].split(',');
                         if(container[0]==container1[0])
                          {
                           newjazz[h]=container1[1];
                             h++;
                        }
                       }
                     }

                      var obj1={};
                      for(q=0;q<4;q++)
                     {
                      obj1[main[q][0]]=parseInt(newjazz[q]);
                     }
                      obj1["Year"]=container[0];

                       json.push(obj1);
                   }
                 }
          }
         fs.writeFile("File4.json", JSON.stringify(json) , function(err) {
          if(err)
          {
              return console.log(err);
           }
            });
    //  console.log(main);
        });
