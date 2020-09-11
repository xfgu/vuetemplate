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
    },
    mainMapUrl:[
		["http://srv{s}.zjditu.cn/ZJEMAP_2D/wmts?service=WMTS&request=GetTile&version=1.0.0&style=default&format=image/jpgpng&layer=TDT_ZJIMGANNO&TileMatrixSet=default028mm&TileMatrix={z}&TileCol={x}&TileRow={y}","http://srv{s}.zjditu.cn/ZJEMAPANNO_2D/wmts?service=WMTS&request=GetTile&version=1.0.0&style=default&format=image/jpgpng&layer=TDT_ZJIMGANNO&TileMatrixSet=default028mm&TileMatrix={z}&TileCol={x}&TileRow={y}"],
		["http://srv{s}.zjditu.cn/ZJDOM_2D/wmts?service=WMTS&request=GetTile&version=1.0.0&style=default&format=image/jpgpng&layer=imgmap&TileMatrixSet=default028mm&TileMatrix={z}&TileCol={x}&TileRow={y}","http://srv{s}.zjditu.cn/ZJEMAPANNO_2D/wmts?service=WMTS&request=GetTile&version=1.0.0&style=default&format=image/jpgpng&layer=TDT_ZJIMGANNO&TileMatrixSet=default028mm&TileMatrix={z}&TileCol={x}&TileRow={y}"],
	],
    customMapUrl:[],
}