const Node = {
  "id": "91859450b91a8d7c",
  "type": "cronplus",
  "z": "430c18d1c750765e",
  "name": "7 days after quarter",
  "outputField": "time",
  "timeZone": "",
  "persistDynamic": false,
  "commandResponseMsgOutput": "output1",
  "outputs": 1,
  "options": [
    {
      "name": "7 days after quarter",
      "topic": "",
      "payloadType": "date",
      "payload": "",
      "expressionType": "cron",
      "expression": "0 0 0 8 1,4,7,10 ? *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 130,
  "y": 300,
  "wires": [
    [
      "f22b7552526936db"
    ]
  ],
  "_order": 100
}

module.exports = Node;