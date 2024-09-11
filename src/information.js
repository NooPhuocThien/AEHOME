
var chart = JSC.chart('chartDiv', {
    type: 'organizational down',
    legend_visible: false,
    defaultPoint_events_click: function() { 
      var name_value = this.name
      ae_information(name_value);
    },
    series: [
      {
        defaultPoint: {
          focusGlow: { color: '%color', opacity: 0.3 },
          connectorLine: { color: main_color, width: 1 }, 
          label: {
            text: '<span><span><img  width=50 height=50 transform=translate(-35,7) src=%img></span><span><span style="color:black;x=-30;y=0;font-weight:bold">%name</span><span>%data</span>',
            margin_left: 30,
            align: 'left',
          },
          annotation: {
            width:110,
            height:70,
            corners: 'round',
            radius: 5,
            margin: [10, 20, 0, 0],
            outline_color:'red',
          },
          outline_color:main_color,
          outline_width: 1,
          color: 'white', //màu nền của các nhánh
        },
        points: [
          {
            name: 'Eric',
            id: 'eric',
            attributes: {
              img: 'img/Org5.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>AE-Manager</li><li>877654</li><li>EXT:2614</li></ul>',
            //   tasks: '<ul> <li>Operations</li> <li>Bookkeeping</li><li><i>Strategy</i></li></ul>',
            },  
          },
          
          {
            name: 'Stephen',
            id: 'stephen',
            parent: 'eric',
            attributes: {
            img: 'img/Org2.png',
            data: '<ul style="font-size:10px;color:black;y=-20"><li>Manager</li><li>877670</li><li>EXT:2615</li></ul>',
            //   tasks: '<ul><li>Product Strategy</li><li>Artistic Direction</li><li><i>Product Design</i></li></ul>',
            },
          },
          {
            name: 'Donald',
            id: 'donald',
            parent: 'stephen',
            attributes: {
              img: 'img/donald.JPG',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>VSM</li><li>01053296</li><li>EXT:2612</li></ul>',
            //   tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },

          {
            name: 'Grant',
            id: 'grant',
            parent: 'donald',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>GL</li><li>01054491</li><li>EXT:2612</li></ul>',
            //   tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Alvin',
            id: 'alvin',
            parent: 'donald',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>GL</li><li>01051219</li><li>EXT:2612</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Tim',
            id: 'tim',
            parent: 'grant',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01058524</li><li>EXT:2612</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Vector',
            id: 'vector',
            parent: 'tim',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01059342</li><li>EXT:2612</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Philip',
            id: 'philip',
            parent: 'vector',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01070507</li><li>EXT:2612</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Sam',
            id: 'sam',
            parent: 'alvin',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01056050</li><li>EXT:2612</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Bryan',
            id: 'bryan',
            parent: 'sam',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01058097</li><li>EXT:2612</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Strong',
            id: 'strong',
            parent: 'stephen',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>VSM</li><li>01051203</li><li>EXT:2068</li></ul>',
              tasks: '<ul><li>Purchasing</li><li>Review</li></ul>',
            },
          },
          {
            name: 'David',
            id: 'david',
            parent: 'strong',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>GL</li><li>01055714</li><li>EXT:2631</li></ul>',
              tasks: '<ul><li>Purchasing</li><li>Review</li></ul>',
            },
          },
          {
            name: 'Justin',
            id: 'justin',
            parent: 'david',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01055825</li><li>EXT:2631</li></ul>',
              tasks: '<ul><li>Purchasing</li><li>Review</li></ul>',
            },
          },
          {
            name: 'Ari',
            id: 'ari',
            parent: 'justin',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01057551</li><li>EXT:2631</li></ul>',
              tasks: '<ul><li>Purchasing</li><li>Review</li></ul>',
            },
          },
          {
            name: 'Kai',
            id: 'kai',
            parent: 'david',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01055140</li><li>EXT:2631</li></ul>',
              tasks: '<ul><li>Purchasing</li><li>Review</li></ul>',
            },
          },
          {
            name: 'Tony',
            id: 'tony',
            parent: 'david',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01051957</li><li>EXT:2631</li></ul>',
              tasks: '<ul><li>Purchasing</li><li>Review</li></ul>',
            },
          },
          {
            name: 'Tom',
            id: 'tom',
            parent: 'tony',
            attributes: {
              img: 'img/Org2.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01054957</li><li>EXT:2631</li></ul>',
              tasks: '<ul><li>Purchasing</li><li>Review</li></ul>',
            },
          },

          {
            name: 'Steve',
            id: 'steve',
            parent: 'stephen',
            attributes: {
              img: 'img/steve.JPG',
              data: '<ul style="font-size:10px;color:black;y=-20;"><li>VSM</li><li>01058356</li><li>EXT:2611</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Jerry',
            id: 'jerry',
            parent: 'steve',
            attributes: {
              img: 'img/Org3.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>GL</li><li>01054201</li><li>EXT:2611</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'William',
            id: 'william',
            parent: 'jerry',
            attributes: {
              img: 'img/Org3.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01053333</li><li>EXT:2611</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },


          {
            name: 'Yorn',
            id: 'yorn',
            parent: 'william',
            attributes: {
              img: 'img/Org3.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01056119</li><li>EXT:2611</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },

          {
            name: 'Conte',
            id: 'conte',
            parent: 'steve',
            attributes: {
              img: 'img/Org3.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>GL</li><li>01055701</li><li>EXT:2631</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Dominic',
            id: 'dominic',
            parent: 'conte',
            attributes: {
              img: 'img/Org3.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01053336</li><li>EXT:2632</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Peter',
            id: 'peter',
            parent: 'dominic',
            attributes: {
              img: 'img/Org3.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01053340</li><li>EXT:2632</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },
          {
            name: 'Otis',
            id: 'otis',
            parent: 'peter',
            attributes: {
              img: 'img/Org3.png',
              data: '<ul style="font-size:10px;color:black;y=-20"><li>TL</li><li>01053340</li><li>EXT:2632</li></ul>',
              tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
            },
          },

        //   {
        //     name: 'Tracy',
        //     id: 'tracy',
        //     parent: 'stephen',
        //     attributes: {
        //       img: 'img/Org7.png',
        //       data: '<ul><li>TL</li><li>773-555-4444</li><li><i>Chicago, IL</i></li></ul>',
        //       tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>',
        //     },
        //   },

        ],
      },
    ],

  });