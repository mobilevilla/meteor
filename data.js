var APP_DATA = {
  "scenes": [
    {
      "id": "0-1_view01_view01",
      "name": "1_View01_View01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.01770874911659,
          "pitch": 0.08691338683357586,
          "rotation": 0,
          "target": "1-1_view01_view02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1_view01_view02",
      "name": "1_View01_View02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0004010330997274991,
          "pitch": 0,
          "rotation": 0,
          "target": "0-1_view01_view01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
