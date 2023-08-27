const Node = {
  "id": "58ac2357cb936db7",
  "type": "switch",
  "z": "2fafee7e73a5841f",
  "g": "e075923bfcad895a",
  "name": "check payload",
  "property": "payload.table",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 400,
  "y": 80,
  "wires": [
    [
      "1a31c565690f3e94"
    ],
    [
      "e0a29ae3ac0ef051"
    ]
  ],
  "_order": 92
}

module.exports = Node;