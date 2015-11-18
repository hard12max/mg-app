//var me =new google.maps.LatLng(36.828504, 10.136531);
var x=36.828504;
var y =10.136531;
var nom="hamza"
var adr="14 rue hechmie jaloul cite iben kaldoun tunis"
var tel="22373395"

var info='<table><tr><td>nom:</td><td>'+nom+'</td></tr><tr><td>adresse:</td><td>'+adr+'</td></tr><tr><td>tel:</td><td>'+tel+'</td></tr></table>'
var me=new google.maps.LatLng(x, y);

function initialize()
{
var mapProp = {
  center:me,
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:me,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:info
  });

infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);