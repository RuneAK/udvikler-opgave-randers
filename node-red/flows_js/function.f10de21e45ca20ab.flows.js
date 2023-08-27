const Node = {
  "id": "f10de21e45ca20ab",
  "type": "function",
  "z": "430c18d1c750765e",
  "g": "c968a42e7ba6ea5d",
  "name": "set quater variable",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 370,
  "y": 400,
  "wires": [
    [
      "66a552c734280761"
    ]
  ],
  "_order": 103
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var date = new Date(msg.time)
  var quater_var = {}
  quater_var.code = "Tid"
  
  var quater_string = date.getFullYear().toString() + "K" + Math.ceil((date.getMonth() + 1) / 3).toString()
  
  quater_var.values = [quater_string]
  msg.payload.variables.push(quater_var)
  
  msg.quater = quater_string
  delete msg.time
  
  return msg;
}

module.exports = Node;