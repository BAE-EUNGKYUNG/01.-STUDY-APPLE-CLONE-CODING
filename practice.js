(()=>{

    const sceneInfo [
        
        {
           //0
           heightNum = 5 ,
           scrollHeight = 0 ,
           type = 'sticky', 
        },
        {
            //1
            heightNum = 5 ,
            scrollHeight = 0 ,
            type = 'sticky', 
         },
         {
            //2
            heightNum = 5 ,
            scrollHeight = 0 ,
            type = 'sticky', 
         },
         {
            //3
            heightNum = 5 ,
            scrollHeight = 0 ,
            type = 'sticky', 
         }


    ]

    function scrollHeight() {
        for (i=0; i<sceneInfo.length ; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        }
    };
    
    scrollHeight();







})();