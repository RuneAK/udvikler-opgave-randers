const Node = {
  "id": "06ad402cea524255",
  "type": "switch",
  "z": "2fafee7e73a5841f",
  "g": "6d503062f914399b",
  "name": "Check statusCode for sucess",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 760,
  "y": 220,
  "wires": [
    [],
    []
  ],
  "_order": 95
}

module.exports = Node;