export const config = {
    baseUrl:'http://dev.gis580.com:8099/BDDJ2020_Server/',
    // baseUrl:'http://192.168.1.131:8001/BDDJ2020/',
    //imgUrl:'http://192.168.1.139:8893/HDApproval/upload/imgs/',
    //baseUrl:'http://127.0.0.1:8892/HydrologicData/',
    //pdfUrl:'http://dev.gis580.com/HZSZY/file/',
    userKey:'LandPriceInfoManage',
    sysCName:'标定地价管理信息系统',
    mapConfig:{
        center: [28.85, 120.733333],
        zoom: 8,   // 初始地图等级
        minZoom: 7,   // 地图最小级别
        maxZoom: 18,    // 地图最大级别
        zindex:0,   //
    },
    mainMapUrl:[
		["http://t{s}.tianditu.gov.cn/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=5ec867c2be5178c5416a0b504d28bd2a"],
		["http://t{s}.tianditu.gov.cn/cva_c/wmts?layer=cva&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=5ec867c2be5178c5416a0b504d28bd2a"],
	],
    customMapUrl:[],
}