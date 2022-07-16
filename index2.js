function lw()
{
 let score=0;


 var a = document.querySelector( 'input[name="a"]:checked');


 var b = document.querySelector( 'input[name="b"]:checked');



 var c = document.querySelector( 'input[name="c"]:checked');
 


 var d = document.querySelector( 'input[name="d"]:checked');
 



 var e = document.querySelector( 'input[name="e"]:checked');
 

 if(a.value!=0)
 {   
    if (a.value=="Vimal Daga")
    {
        score = score+20;
    }
 }   
 else
 {
        score = score+0;
 }


 if(b.value!=0)
 {   
    if (b.value=="Vimal Daga")
    {
        score = score+20;
    }
 }   
 else
 {
        score = score+0;
 }

    
 if(c.value!=0)
    {   
       if (c.value=="16 July")
       {
           score = score+20;
       }
    }   
 else
    {
           score = score+0;
    }

       

 if(d.value!=0)
       {   
          if (d.value=="JavaScript")
          {
              score = score+20;
          }
       }   
 else
        {
              score = score+0;
        }

          


 if(e.value!=0)
          {   
             if (e.value=="node js")
             {
                 score = score+20;
             }
          }   
 else
            {
                 score = score+0;
            }


 



 
    var img = document.getElementById("img1");
    if(score>=60){
        img.style.visibility = "visible";
    }
       
    var imgg = document.getElementById("img2");
    if(score<60){
        imgg.style.visibility = "visible";
    }
       

 
}