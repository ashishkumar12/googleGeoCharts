google.load('visualization', '1', {'packages': ['geochart','geomap']});
var googleMap = (function(){
  return{
    initMap : function(){
      var data = google.visualization.arrayToDataTable([
        ['State Code', 'State','race_state'],
        ['IN-AP',	'Andhra Pradesh',1],
        ['IN-AR',	'Arunachal Pradesh',1],
        ['IN-AS',	'Assam',1],
        ['IN-BR',	'Bihar',1],
        ['IN-CT',	'Chhattisgarh',1],
        ['IN-GA',	'Goa',1],
        ['IN-GJ',	'Gujarat',1],
        ['IN-HR',	'Haryana',1],
        ['IN-HP',	'Himachal Pradesh',1],
        ['IN-JK',	'Jammu and Kashmir',1],
        ['IN-JH',	'Jharkhand',1],
        ['IN-KA',	'Karnataka',1],
        ['IN-KL',	'Kerala',1],
        ['IN-MP',	'Madhya Pradesh',1],
        ['IN-MH',	'Maharashtra',1],
        ['IN-MN',	'Manipur',1],
        ['IN-ML',	'Meghalaya',1],
        ['IN-MZ',	'Mizoram',1],
        ['IN-NL',	'Nagaland',1],
        ['IN-OR',	'Odisha',1],
        ['IN-PB',	'Punjab',1],
        ['IN-RJ',	'Rajasthan',1],
        ['IN-SK',	'Sikkim',1],
        ['IN-TN',	'Tamil Nadu',1],
        ['IN-TG',	'Telangana',1],
        ['IN-TR',	'Tripura',1],
        ['IN-UT',	'Uttarakhand',1],
        ['IN-UP',	'Uttar Pradesh',1],
        ['IN-WB',	'West Bengal',1],
        ['IN-AN',	'Andaman and Nicobar Islands',1],
        ['IN-CH',	'Chandigarh',1],
        ['IN-DN',	'Dadra and Nagar Haveli',1],
        ['IN-DD',	'Daman and Diu',1],
        ['IN-DL',	'Delhi',1],
        ['IN-LD',	'Lakshadweep',1],
        ['IN-PY',	'Puducherry',1]
      ]);

      var options = {
        backgroundColor: {fill:'#000',stroke:'#000' ,strokeWidth:25 },
        colorAxis:  {minValue: 1,maxValue: 2,colors: ['#f5f5f5', 'grey', '#f5f5f5']},
        legend: 'none',
        backgroundColor: {fill:'#fff',stroke:'#fff' ,strokeWidth:25 },
        datalessRegionColor: '#fff',
        displayMode: 'regions',
        dataMode : 'regions',
        enableRegionInteractivity: 'true',
        resolution: 'provinces',
        sizeAxis: {minValue: 1, maxValue:1,minSize:10,  maxSize: 10},
        region:'IN',
        keepAspectRatio: true,
        useMapTypeControl : true,
        showInfoWindow: true,
        tooltip: {textStyle: {color: '#444444'}, trigger:'focus', isHtml: false}
      };

      var geochart = new google.visualization.GeoChart(
        document.getElementById('map'));
        geochart.draw(data, options);
        google.visualization.events.addListener(geochart, 'regionClick', function(resp) {
          geochart.setSelection(getSelection());
          window.location = 'www.yourURL.com/route/'+resp['region'];
        });
      }
    }
  })();
  google.setOnLoadCallback(googleMap.initMap);
