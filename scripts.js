google.load('visualization', '1', {'packages': ['geochart','geomap']});
var colorArray = [];

var googleMap = (function(){
  return{
    initMap : function(){
      var data = google.visualization.arrayToDataTable([
        ['State Code', 'State','race_state'],
        ['IN-AP',	'Andhra Pradesh',1],
        ['IN-AR',	'Arunachal Pradesh',2],
        ['IN-AS',	'Assam',3],
        ['IN-BR',	'Bihar',4],
        ['IN-CT',	'Chhattisgarh',5],
        ['IN-GA',	'Goa',6],
        ['IN-GJ',	'Gujarat',7],
        ['IN-HR',	'Haryana',8],
        ['IN-HP',	'Himachal Pradesh',1],
        ['IN-JK',	'Jammu and Kashmir',10],
        ['IN-JH',	'Jharkhand',11],
        ['IN-KA',	'Karnataka',12],
        ['IN-KL',	'Kerala',13],
        ['IN-MP',	'Madhya Pradesh',14],
        ['IN-MH',	'Maharashtra',15],
        ['IN-MN',	'Manipur',16],
        ['IN-ML',	'Meghalaya',17],
        ['IN-MZ',	'Mizoram',18],
        ['IN-NL',	'Nagaland',19],
        ['IN-OR',	'Odisha',20],
        ['IN-PB',	'Punjab',21],
        ['IN-RJ',	'Rajasthan',22],
        ['IN-SK',	'Sikkim',23],
        ['IN-TN',	'Tamil Nadu',24],
        ['IN-TG',	'Telangana',25],
        ['IN-TR',	'Tripura',26],
        ['IN-UT',	'Uttarakhand',27],
        ['IN-UP',	'Uttar Pradesh',28],
        ['IN-WB',	'West Bengal',29],
        ['IN-AN',	'Andaman and Nicobar Islands',30],
        ['IN-CH',	'Chandigarh',31],
        ['IN-DN',	'Dadra and Nagar Haveli',32],
        ['IN-DD',	'Daman and Diu',33],
        ['IN-DL',	'Delhi',34],
        ['IN-LD',	'Lakshadweep',35],
        ['IN-PY',	'Puducherry',36]
      ]);
      console.log(colorArray);
      var options = {
        // backgroundColor: {fill:'#000',stroke:'#000' ,strokeWidth:25 },
        // colorAxis:  {colors: colorArray},
        legend: 'none',
        backgroundColor: {fill:'#fff',stroke:'#fff' ,strokeWidth:25 },
        datalessRegionColor: '#000',
        displayMode: 'regions',
        dataMode : 'regions',
        resolution: 'provinces',
        region:'IN',
        keepAspectRatio: true,
        showInfoWindow: true
      };

      var geochart = new google.visualization.GeoChart(
        document.getElementById('map'));
        geochart.draw(data, options);
        google.visualization.events.addListener(geochart, 'regionClick', function(resp) {
          geochart.setSelection(getSelection());
          var route = resp['region'];
          if(route.slice(0,2) == 'IN'){
            // console.log(route);
            window.location = 'www.yourURL.com/route/'+route;
          }else{
            return null;
          }
        });
      },
      generateColor : function(){
        while(colorArray.length < 36){
          var colorcode = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
          if(colorArray.indexOf(colorcode) < 0 ){
            colorArray.push(colorcode);
          }
        }
        google.setOnLoadCallback(googleMap.initMap);
      }
    }
  })();
  googleMap.generateColor();
