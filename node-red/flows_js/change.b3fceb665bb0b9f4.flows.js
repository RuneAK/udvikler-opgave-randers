const Node = {
  "id": "b3fceb665bb0b9f4",
  "type": "change",
  "z": "2fafee7e73a5841f",
  "g": "e075923bfcad895a",
  "name": "set url and method",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.statbank.dk/v1/data",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 80,
  "wires": [
    [
      "58ac2357cb936db7"
    ]
  ],
  "_order": 90
}

module.exports = Node;