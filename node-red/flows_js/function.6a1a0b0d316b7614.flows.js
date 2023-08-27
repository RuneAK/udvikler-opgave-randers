const Node = {
  "id": "6a1a0b0d316b7614",
  "type": "function",
  "z": "430c18d1c750765e",
  "name": "transform to dataset",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 560,
  "y": 520,
  "wires": [
    [
      "5098dbb1842570e2"
    ]
  ],
  "_order": 105
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let data = msg.payload.dataset.value
  let dataset = {}
  
  let sexes = ['m', 'k']
  let marital_status = ['ugift', 'gift', 'enke', 'skilt']
  
  let i = 0
  
  sexes.forEach((s) => {
          marital_status.forEach((ms) => {
                  dataset[ms+'_'+s] = data[i]
                  i++
          })
  })
  
  msg.dataset = dataset
  return msg;
}

module.exports = Node;