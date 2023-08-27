const Node = {
  "id": "2fafee7e73a5841f",
  "type": "subflow",
  "name": "Statistikbanken",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 80,
      "wires": [
        {
          "id": "b3fceb665bb0b9f4"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1050,
      "y": 200,
      "wires": [
        {
          "id": "06ad402cea524255",
          "port": 0
        }
      ]
    },
    {
      "x": 1050,
      "y": 260,
      "wires": [
        {
          "id": "06ad402cea524255",
          "port": 1
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#DDAA99",
  "outputLabels": [
    "data",
    "retry"
  ],
  "status": {
    "x": 1080,
    "y": 100,
    "wires": [
      {
        "id": "f54f41e8ed974e2d",
        "port": 0
      }
    ]
  },
  "_order": 6
}

module.exports = Node;