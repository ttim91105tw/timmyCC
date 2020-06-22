var player;
var currentPlay=0;

function onYouTubeIframeAPIReady(){
    console.log("onYouTubeIframeAPIReady!");
    player = new YT.Player("player",
        {
            height:"390",
            width:"640",
            videoId:playList[currentPlay],
            playerVars:{
                "autoplay":0,//不自動撥放
                "controls":0,//不顯示控制項
                "start":playTime[currentPlay][0],//起始秒數
                "end":playTime[currentPlay][1],//結束秒數
                "showinfo":0,
                "rel":0,
                "iv_load_policy":3 //不顯示影片註解式行銷
            },
            events:{
                "onReady":onPlayerReady,
                "onStateChange":onPlayerStateChange
            }
        }
    );
}

function onPlayerReady(event){
    console.log("onPlayerReady!");
    $("#playButton").click(function(){
        console.log("Click!");
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{ //撥到最後一首的話 將第一首準備好 並停止播放
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }     
}

