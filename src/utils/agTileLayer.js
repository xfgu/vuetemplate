/**
 * 加载本地arcgis切片类
 * 继承自TileLayer
 * @param {Object} tomcat中映射该切片目录url
 * @param {Object} options
*/
import "leaflet"
L.TileLayer.AgTileLoad = L.TileLayer.extend({
    initialize: function (url, options) {
        options = L.setOptions(this, options);
        this.url = url + "/{z}/{x}/{y}.png";
        L.TileLayer.prototype.initialize.call(this, this.url, options);
    }
});


/**
 * 重写TileLayer中获取切片url方法
 * @param {Object} tilePoint
 */
L.TileLayer.AgTileLoad.prototype.getTileUrl = function(tilePoint) {
    return L.Util.template(this._url, L.extend({
        s: this._getSubdomain(tilePoint),
        z: function() {
            var value = (tilePoint.z+1).toString(10);
            var value = (tilePoint.z).toString(10);
            return "L" + pad(value, 2);
        },
        x: function() {
            var value = tilePoint.y.toString(16);
            return "R" + pad(value, 8);
        },
        y: function() {
            var value = tilePoint.x.toString(16);
            return "C" + pad(value, 8);
        }
        // z: function() {
        //     var value = (tilePoint.z+1).toString(10);
        //     return value;
        // },
        // x: function() {
        //     var value = tilePoint.y.toString(10);
        //     return value;
        // },
        // y: function() {
        //     var value = tilePoint.x.toString(10);
        //     return value;
        // }
    }));
};

/**
 * 高位补全方法
 * @param {Object} 数字类型字符串
 * @param {Object} 总位数，不足则高位补0
 */
var pad = function(numStr, n) {
    var len = numStr.length;
    while(len < n) {
        numStr = "0" + numStr;
        len++;
    }
    return numStr;
};

L.tileLayer.agTileLoad = function(url, options){
    return new L.TileLayer.AgTileLoad(url, options);
};

export default function(url,options){
    var DefaultOptions = {
        tileSize:256,
        continuousWorld: true,
        //bounds:this.bounds,
        opacity:1.0,
        //zoomOffset: 1,
    }
    var options = L.extend({},DefaultOptions,options)
    var tileLayer = L.tileLayer.agTileLoad(url, options);
    return tileLayer;
};



