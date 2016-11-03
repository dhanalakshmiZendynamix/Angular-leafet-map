/**
 * Created by dhanalakshmi on 2/11/16.
 */
app.service('mapSettingService',[function() {
    /*types of map Aerial Road*/
    var mapOptions={
        titleLayer:{
            "osm":new L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                attribution: '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }),
            "bing":new L.BingLayer("AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L", {type: 'AerialWithLabels'})
        }
    }
    var updatedMapOption={};
    var isDefaultMapSetting;

    var markerSettingService = {
        getDefaultMapOptions: function () {
            return mapOptions;
        },
        setDefaultMapOptions: function (mapOption) {
            mapOptions = mapOption;
        },
        setDefaultMap:function (isDefault) {
            isDefaultMapSetting=isDefault
        },
        getDefaultMap:function () {
            return isDefaultMapSetting;
        }

    }
    return markerSettingService;


}]);