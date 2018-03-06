
angular.module('MyApp',['ngMaterial'])

.controller('TitleController', function($scope) {
  $scope.title = "Evtiko Kiralık Evler ";
})

.controller('AppCtrl', function($scope) {
  
  var imagePath = 'http://via.placeholder.com/350x150';

  $scope.hurriyet = {};
  $scope.hurriyet.img = "https://i.hizliresim.com/BLbDjD.png";

  $scope.sahibinden = {};
  $scope.sahibinden.img = "https://i.hizliresim.com/dON35p.png";



  $scope.ozellikler = [{
      resim : imagePath,
      isim: '1. Konaklar',
      ilce: 'Beylikdüzü',
      il:'İstanbul',
      oda: '3+1',
      fiyat: '100',
      metrekare:'123',
      kat:'2'
    }, {
      resim : imagePath,
      isim: '2. Konaklar',
      ilce: 'Kağıthane',
      il: 'Ankara',
      oda: '4+2',
      fiyat: ' 250',
      metrekare: '312',
      kat: '3'
    }, {
      resim : imagePath,
      isim: '3. Konaklar',
      ilce: 'Sarıyer',
      il: 'İstanbul',
      oda: '2+1',
      fiyat: " 333",
      metrekare: "435",
      kat: "5"
    },{
      resim : imagePath,
      isim: '4. Konaklar',
      ilce: 'Ümraniye',
      il: 'İstanbul',
      oda: '3+2',
      fiyat: " 200",
      metrekare: "113",
      kat: "3"
    },{
      resim : imagePath,
      isim: '5. Konaklar',
      ilce: 'Üsküdar',
      il: 'İstanbul',
      oda: '4+3',
      fiyat: " 157",
      metrekare: "122",
      kat: "3"
    },{
      resim : imagePath,
      isim: '6. Konaklar',
      ilce: 'Şişli',
      il: 'İstanbul',
      oda: '5+4',
      fiyat: " 589",
      metrekare: "124",
      kat: "1"
    },{
      resim : imagePath,
      isim: '7. Konaklar',
      ilce: 'Avcılar',
      il: 'İstanbul',
      oda: '2+1',
      fiyat: " 986",
      metrekare: "125",
      kat: "5"
    },{
      resim : imagePath,
      isim: '8. Konaklar',
      ilce: 'Sarıyer',
      il: 'İstanbul',
      oda: '1+1',
      fiyat: " 589",
      metrekare: "125",
      kat: "1"
    },{
      resim : imagePath,
      isim: '9. Konaklar',
      ilce: 'Beykoz',
      il: 'İstanbul',
      oda: '4+3',
      fiyat: " 155",
      metrekare: "123",
      kat: "7"
    },{
      resim : imagePath,
      isim: '10. Konaklar',
      ilce: 'Maltepe',
      il: 'İstanbul',
      oda: '5+2',
      fiyat: " 212",
      metrekare: "126",
      kat: "21"
    },{
      resim : imagePath,
      isim: '11. Konaklar',
      ilce: 'Ataşehir',
      il: 'İstanbul',
      oda: '1+1',
      fiyat: " 128",
      metrekare: "121",
      kat: "12"
    }, {
      resim : imagePath,
      isim: '12. Konaklar',
      ilce: 'Kartal',
      il: 'İstanbul',
      oda: '2+1',
      fiyat:  '136',
      metrekare: "122",
      kat: "9"
    }];

  var imagePath = 'http://via.placeholder.com/350x150';

  $scope.clearFilter = function () {
    console.log("Seçim Temizlendi");
    $scope.query = {};
  };

});


