var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03334267007440772,
          "pitch": 0.14516662914773804,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.0870473442416255,
        "pitch": 0.009892861089078053,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.9596871366022377,
          "pitch": 0.11713154033344253,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 1.6083255135908727,
          "pitch": 0.11581008647584845,
          "rotation": 0,
          "target": "2-livingroom"
        },
        {
          "yaw": -1.63965227500044,
          "pitch": 0.24786489332717565,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingroom",
      "name": "Livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8226496819358644,
          "pitch": 0.15013497230557604,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -0.7458063374943045,
          "pitch": 0.1281856996486006,
          "rotation": 0,
          "target": "3-guest-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-guest-room",
      "name": "Guest Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9966755741674085,
          "pitch": 0.2648361529940093,
          "rotation": 0,
          "target": "2-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5843586589672194,
          "pitch": 0.17550746351150082,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -2.667563582586517,
          "pitch": 0.19510773283422012,
          "rotation": 0,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15140494810813188,
          "pitch": 0.17208007492062727,
          "rotation": 0,
          "target": "7-hallway_2"
        },
        {
          "yaw": -2.2547186476661114,
          "pitch": 0.2947524972162512,
          "rotation": 0,
          "target": "6-guest-bathroom"
        },
        {
          "yaw": 1.5503489652565197,
          "pitch": 0.16284553714062433,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-guest-bathroom",
      "name": "Guest Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6265344641203248,
          "pitch": 0.21921306827875853,
          "rotation": 0,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hallway_2",
      "name": "Hallway_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9444167390035751,
          "pitch": 0.2412410363853148,
          "rotation": 0,
          "target": "8-bathroom"
        },
        {
          "yaw": -0.5467291432602757,
          "pitch": 0.12241979378738499,
          "rotation": 0,
          "target": "9-bedroom"
        },
        {
          "yaw": 2.4582139289213654,
          "pitch": 0.11675855179666073,
          "rotation": 0,
          "target": "5-hallway"
        },
        {
          "yaw": 2.695476191278213,
          "pitch": 0.2386591556952169,
          "rotation": 7.853981633974483,
          "target": "6-guest-bathroom"
        },
        {
          "yaw": 2.249209200068333,
          "pitch": 0.22803293040838568,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.886465741230122,
          "pitch": 0.19667959127658818,
          "rotation": 0,
          "target": "7-hallway_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09715544694337375,
          "pitch": 0.1228970467553232,
          "rotation": 0,
          "target": "10-bedroom_2"
        },
        {
          "yaw": 1.380902616968939,
          "pitch": 0.2535750816632252,
          "rotation": 0,
          "target": "11-balcony"
        },
        {
          "yaw": -3.091625310534983,
          "pitch": 0.15318939536800968,
          "rotation": 0,
          "target": "7-hallway_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom_2",
      "name": "Bedroom_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11085325818560143,
          "pitch": 0.14743861588065243,
          "rotation": 0,
          "target": "9-bedroom"
        },
        {
          "yaw": -0.528581751776322,
          "pitch": 0.1540880653152481,
          "rotation": 5.497787143782138,
          "target": "11-balcony"
        },
        {
          "yaw": 0.09133427069030375,
          "pitch": 0.14846381070366732,
          "rotation": 0.7853981633974483,
          "target": "7-hallway_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3754762994087706,
          "pitch": 0.27162207287989304,
          "rotation": 0,
          "target": "9-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Manis 5",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
