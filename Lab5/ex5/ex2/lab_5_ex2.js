const images = ["https://localist-images.azureedge.net/photos/31654327567712/card/ec9316ac832ae1ccba14f5fe32275ee5ddfd6993.jpg",
"https://localist-images.azureedge.net/photos/31654331533667/card/43aaed607acf7a065810acb0c9112e833423acbb.jpg",
"https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/7/40/7407d626-2dfd-11ec-b15a-c7638b18989a/6169f029cf49a.image.jpg?resize=750%2C500",
"https://localist-images.azureedge.net/photos/31654325526942/card/e8dd64c1b3958223b7682d39e94ebf7c9e3d29a0.jpg",
"https://union.ku.edu/sites/union/files/styles/landscape_col_lg_6/public/2020/images/IMG_8311.jpg?h=56d0ca2e&itok=zKnipdxs"];

var x = 0;
var image = "";
image = document.getElementById("myimg").src;
function next()
{
    x=x+1;
    if(x>4)
    {
        x=0;
    }
    
    image = images.x;
}

function previous()
{
    x=x-1;
    if(x<0)
    {
        x=4;
    }
    
    image = images.x;
}
