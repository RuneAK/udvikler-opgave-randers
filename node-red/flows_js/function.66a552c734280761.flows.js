const Node = {
  "id": "66a552c734280761",
  "type": "function",
  "z": "430c18d1c750765e",
  "g": "c968a42e7ba6ea5d",
  "name": "set age variable",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 580,
  "y": 400,
  "wires": [
    [
      "bdb8f1fe393a986b"
    ]
  ],
  "_order": 101
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Check age group
  if (msg.age_group.start > msg.age_group.end)
      throw new Error('Start age bigger than end age');
  
  var age_var = {}
  age_var.code = "ALDER"
  
  // Generate string for age group
  // Needed because Statestikbanken's documentation 
  // is incorrect / not updated since September 2017!
  var age_string = 
  "sum(" +
  Array(msg.age_group.end - msg.age_group.start + 1).fill().map(
      (element, index) => index + msg.age_group.start)
  .toString() 
  +")"
  
  age_var.values = [age_string]
  msg.payload.variables.push(age_var)
  return msg;
}

module.exports = Node;