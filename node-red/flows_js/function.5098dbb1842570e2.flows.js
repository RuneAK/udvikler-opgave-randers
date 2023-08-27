const Node = {
  "id": "5098dbb1842570e2",
  "type": "function",
  "z": "430c18d1c750765e",
  "g": "2a659f7982821691",
  "name": "generate SQL",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 380,
  "y": 660,
  "wires": [
    [
      "5448531f7d6a17f6"
    ]
  ],
  "_order": 110
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let col_string = '(kvartal,' + Object.keys(msg.dataset).toString() + ')'
  let value_string = '("' + msg.quater + '",' + Object.values(msg.dataset).toString() + ')'
  
  let sql = 'INSERT INTO civilstand_randers ' + col_string + '\n'
      + 'VALUES ' + value_string + '\n'
  
  msg.sql = sql
  return msg;
}

module.exports = Node;