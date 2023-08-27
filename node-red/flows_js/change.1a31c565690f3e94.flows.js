const Node = {
  "id": "1a31c565690f3e94",
  "type": "change",
  "z": "2fafee7e73a5841f",
  "g": "e075923bfcad895a",
  "name": "default payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"table\":\"FOLK1A\",\"format\":\"JSONSTAT\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 80,
  "wires": [
    [
      "e0a29ae3ac0ef051"
    ]
  ],
  "_order": 93
}

module.exports = Node;