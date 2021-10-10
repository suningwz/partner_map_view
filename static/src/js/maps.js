var lat = $("span[name='partner_latitude']");
var long = $("span[name='partner_longitude']");

var waze_btn = $("a[name='go_to']");
var maps_btn = $("a[name='go_to_maps']");

var ifram = $("iframe[name='map']");

if (long[0] != undefined && lat[0] != undefined){
    
    let longitud = parseFloat(long[0].outerText).toFixed(6);
    let latitud = parseFloat(lat[0].outerText).toFixed(6);

    ifram.attr('src', `https://www.openstreetmap.org/export/embed.html?marker=${latitud},${longitud}&bbox=${longitud},${latitud},${longitud},${latitud}`);


    let url_waze = 'https://www.waze.com/ul?ll='+latitud+','+longitud+'&navigate=yes&zoom=17';
    let url_maps = `https://www.google.com/maps/search/${latitud}+${longitud}/@${latitud},${longitud},20z`;

    waze_btn.attr("href", url_waze);
    maps_btn.attr("href", url_maps);
}