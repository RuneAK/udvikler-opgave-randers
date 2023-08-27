const Node = {
  "id": "de15b59e503bdab2",
  "type": "template",
  "z": "430c18d1c750765e",
  "g": "b21af21e0b964a55",
  "name": "SQL - droptable",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 320,
  "y": 180,
  "wires": [
    [
      "6d45a514f2e467c2"
    ]
  ],
  "_order": 107
}

Node.template = `
DROP TABLE civilstand_randers
`

module.exports = Node;