const Node = {
  "id": "44342ee322e49181",
  "type": "change",
  "z": "430c18d1c750765e",
  "g": "c968a42e7ba6ea5d",
  "name": "default payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"table\":\"FOLK1A\",\"format\":\"JSONSTAT\",\"variables\":[{\"code\":\"OMRÅDE\",\"values\":[\"730\"]},{\"code\":\"KØN\",\"values\":[\"1\",\"2\"]},{\"code\":\"CIVILSTAND\",\"values\":[\"U\",\"G\",\"E\",\"F\"]}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 300,
  "wires": [
    [
      "f10de21e45ca20ab"
    ]
  ],
  "_order": 99
}

module.exports = Node;