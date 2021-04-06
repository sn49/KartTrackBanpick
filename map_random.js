var mapall=[];
var mapresult=[];
function map_random(mode,amount){
    document.getElementById("result").innerHTML="";
    mapresult=[];
    var map1v1 = '비치 해변 드라이브,쥐라기 공룡 무덤,브로디 비밀의 연구소,네모 산타의 비밀공간,빌리지 고가의 질주,월드 리오 다운힐,도검 구름의 협곡,신화 신들의 세계,WKC 코리아 서킷,차이나 서안 병마용';

    var mapnormal = '브로디 비밀의 연구소,월드 뉴욕 대질주,쥐라기 공룡 결투장,월드 두바이 다운타운,사막 놀라운 공룡 유적지,신화 신들의 세계,비치 해변 드라이브,빌리지 고가의 질주,WKC 싱가폴 마리나 서킷,WKC 상해 서킷,월드 리오 다운힐,빌리지 익스트림 경기장,빌리지 남산,어비스 운명의 갈림길';

    var maphard='월드 이탈리아 피사의 사탑,WKC 브라질 서킷,네모 산타의 비밀공간,네모 강철바위 용광로,도검 구름의 협곡,대저택 은밀한 지하실,차이나 골목길 대질주,차이나 서안 병마용,황금문명 오리엔트 황금 좌표,황금문명 비밀장치의 위협,해적 로비 절벽의 전투,빌리지 만리장성,어비스 바다 소용돌이,사막 빙글빙글 공사장,공동묘지 해골성 대탐험';

    var mapveryhard='노르테유 익스프레스,광산 3개의 지름길,광산 위험한 제련소,광산 꼬불꼬불 다운힐,동화 이상한 나라의 문,쥐라기 공룡섬 대모험,어비스 스카이라인,어비스 숨겨진 바닷길,문힐시티 숨겨진 지하터널,공동묘지 마왕의 초대,포레스트 지그재그,팩토리 미완성 5구역,빌리지 붐힐터널';

    var result=0;

    if (mode===1){
        if(amount>map1v1.split(',').length){
            alert('에결 맵 개수는 '+map1v1.split(',').length+"개 입니다.")
            return;
        }
    }
    else if (mode===2){
        if(amount>mapnormal.split(',').length){
            alert('노멀 맵 개수는 '+mapnormal.split(',').length+"개 입니다.")
            return;
        }
    }
    else if(mode===3){
        if(amount>maphard.split(',').length){
            alert('하드 맵 개수는 '+maphard.split(',').length+"개 입니다.")
            return;
        }
    }
    else if(mode===4){
        if(amount>mapveryhard.split(',').length){
            alert('베리하드 맵 개수는 '+mapveryhard.split(',').length+"개 입니다.")
            return;
        }
    }
    else if(mode===5){
        mapall=[]
        for (var i=0; i<map1v1.split(',').length; i++){
            mapall.push(map1v1.split(',')[i]);
        }
        for (var i=0; i<mapnormal.split(',').length; i++){
            if(mapall.indexOf(mapnormal.split(',')[i])===-1)
                mapall.push(mapnormal.split(',')[i]);
        }

        for (var i=0; i<maphard.split(',').length; i++){
            if(mapall.indexOf(maphard.split(',')[i])===-1)
                mapall.push(maphard.split(',')[i]);
        }

        for (var i=0; i<mapveryhard.split(',').length; i++){
            if(mapall.indexOf(mapveryhard.split(',')[i])===-1)
                mapall.push(mapveryhard.split(',')[i]);          
        }
        console.log(amount)
        console.log(mapall.length)
        if(amount>mapall.length){
            alert('전체 맵 개수는 '+mapall.length+"개 입니다.");
            return;
        }
    }

    for(var i=0; i<amount; i++){
        switch(mode){
            case 1:
                result = Math.floor(map1v1.split(',').length*Math.random());
                if(mapresult.indexOf(map1v1.split(',')[result])===-1)
                    mapresult.push(map1v1.split(',')[result])
                else
                    i--;
                break;
            case 2:
                result = Math.floor(mapnormal.split(',').length*Math.random());
                if(mapresult.indexOf(mapnormal.split(',')[result])===-1)
                    mapresult.push(mapnormal.split(',')[result])
                else
                    i--;
                break;
            case 3:
                result = Math.floor(maphard.split(',').length*Math.random());
                if(mapresult.indexOf(maphard.split(',')[result])===-1)
                    mapresult.push(maphard.split(',')[result])
                else
                    i--;
                break;
            case 4:
                result = Math.floor(mapveryhard.split(',').length*Math.random());
                if(mapresult.indexOf(mapveryhard.split(',')[result])===-1)
                    mapresult.push(mapveryhard.split(',')[result])
                else
                    i--;
                break;
            case 5:           
                result = Math.floor((Math.random()*mapall.length));
                if(mapresult.indexOf(mapall[result])===-1)
                    mapresult.push(mapall[result])
                else
                    i--;
                break;
            default : 
                alert("잘못 입력함");
                break;
        }
    }
    try{
        for(i=0; i<mapresult.length; i++){
            number.push(i+1)
        }
    }
    catch{
        
    }
    

    createtable(parseInt(mapresult.length/2)+Math.ceil(mapresult.length%2))

    
}

function createtable(row){
    var tabletext=""
    var column=2;

    console.log(`row:${row}  column:${column}`)
    var index=0;
    tabletext+="<table>"


        for(i=0; i<row; i++){
            tabletext+="<tr>"
            for(j=0; j<column; j++){
                tabletext+="<td>"
            if(index<mapresult.length){
                tabletext+=`<div id="${index+1}"><button type="button" onclick="picked(${index+1}); document.getElementById('${index+1}').style.visibility='hidden';">${index+1}</button>${mapresult[index]}</div>`;

            }   
            
            tabletext+="</td>";
            index++;
            }
            tabletext+="</tr>"
    
        }
        tabletext+="</table>"

        document.getElementById("result").innerHTML+=tabletext
}