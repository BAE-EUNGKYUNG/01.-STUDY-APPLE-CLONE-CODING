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

	function setLayout() {
		// 각 스크롤 섹션의 높이 세팅
		for (let i = 0; i < sceneInfo.length; i++) {
			if (sceneInfo[i].type === 'sticky') {
				sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
			} else if (sceneInfo[i].type === 'normal')  {
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
			}
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
		}







})();