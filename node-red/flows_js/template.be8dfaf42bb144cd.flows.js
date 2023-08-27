const Node = {
  "id": "be8dfaf42bb144cd",
  "type": "template",
  "z": "430c18d1c750765e",
  "g": "c357172b114bba86",
  "name": "SQL - create table",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 330,
  "y": 80,
  "wires": [
    [
      "179fb33fa7fae9dd"
    ]
  ],
  "_order": 97
}

Node.template = `
  CREATE TABLE IF NOT EXISTS civilstand_randers (
    id INT NOT NULL AUTO_INCREMENT,
    ugift_m INT,
    gift_m INT,
    enke_m INT,
    skilt_m INT,
    ugift_k INT,
    gift_k INT,
    enke_k INT,
    skilt_k INT,
    kvartal VARCHAR(16) NOT NULL UNIQUE,
    PRIMARY KEY (id)
  );
`

module.exports = Node;