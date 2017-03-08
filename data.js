//set the keys
const whomkey = [
    {id:1,whom:'boyfriend',color:'#9e7cc8'},
    {id:2,whom:'friend',color:'#f9ab3c'},
    {id:3,whom:'Stefanie',color:'#f69396'},
    {id:4,whom:'coworker',color:'#e23047'},
    {id:5,whom:'stranger',color:'#333'},
    {id:6,whom:'famous person',color:'#999'}
]
const howoftenkey = [
    {id:1,often:'not likely',color:'#494048',style:'1,5'},
    {id:2,often:'like once a week',color:'#4a4b55',style:'5,5'},
    {id:3,often:'pretty often',color:'#944a34',style:'1,5,5,5'},
    {id:4,often:'every day',color:'#fc7345',style:'1'}
]
const reachablekey = [
    {id:4,reachable:'Easily',color:'#eb4da2'},
    {id:3,reachable:'Yes,if I had more willpower\/work harder',color:'#bd3484'},   
    {id:2,reachable:'Hand, But could be',color:'#4a4b55'},
    {id:1,reachable:'Nope',color:'#494048'}   
]
const learnedkey = [
    {id:1,learned:'sometimes I don\'t like pants of my job',color:'#e23047'},
    {id:2,learned:'I am a control freak!',color:'#5c608e'},
    {id:3,learned:'I am indulgent',color:'#5d507b'},
    {id:4,learned:'I am black on white',color:'#54b7d9'},
    {id:5,learned:'there are areas I really need to improve',color:'#f9ab3c'},
    {id:6,learned:'I don\'t have to \'SAVE\' my coat dresses!! Just wear them!',color:'#eb4da2'}
]
const typekey = [
    {id:1,type:'having less Responsibilities',color:'#e23047'},
    {id:2,type:'having more free time',color:'#fc7345'},
    {id:3,type:'having clearer tasks to do',color:'#944a34'},
    {id:4,type:'be more moderate/stable balanced',color:'#54b7d9'},
    {id:5,type:'being able to take things easier',color:'#becde6'},
    {id:6,type:'being less control freak',color:'#5c608e'},
    {id:7,type:'be healthier(exeracel eat week)',color:'#999'},
    {id:8,type:'English!! Mastering the languages/accent',color:'#eb4da2'},
    {id:9,type:'How I look/dress/elegance',color:'#9e7cc8'},
    {id:10,type:'CHARM!',color:'#333'}
]
const grid = [
    {id:1,row:1,column:1},
    {id:2,row:1,column:2},
    {id:3,row:1,column:3},
    {id:4,row:2,column:1},
    {id:5,row:2,column:2},
    {id:6,row:2,column:3},
]
//data
var maindata = [
  {
    "type": 9,
    "level": 8,
    "whom": 6,
    "howoften": 1,
    "ofenlevel": 4,
    "reachable": 2,
    "reachlevel": 8,
    "learned": 5
  },
  {
    "type": 10,
    "level": 6,
    "whom": 6,
    "howoften": 1,
    "ofenlevel": 6,
    "reachable": 1,
    "reachlevel": 10,
    "learned": 5
  },
  {
    "type": 8,
    "level": 7,
    "whom": 6,
    "howoften": 1,
    "ofenlevel": 9,
    "reachable": 2,
    "reachlevel": 5,
    "learned": 5
  },
  {
    "type": 5,
    "level": 6,
    "whom": 2,
    "howoften": 2,
    "ofenlevel": 1,
    "reachable": 3,
    "reachlevel": 9,
    "learned": 4
  },
  {
    "type": 9,
    "level": 3,
    "whom": 5,
    "howoften": 2,
    "ofenlevel": 1,
    "reachable": 4,
    "reachlevel": 4,
    "learned": 6
  },
  {
    "type": 9,
    "level": 3,
    "whom": 5,
    "howoften": 2,
    "ofenlevel": 3,
    "reachable": 4,
    "reachlevel": 2,
    "learned": 6
  },
  {
    "type": 7,
    "level": 4,
    "whom": 2,
    "howoften": 2,
    "ofenlevel": 4,
    "reachable": 4,
    "reachlevel": 5,
    "learned": 3
  },
  {
    "type": 7,
    "level": 5,
    "whom": 1,
    "howoften": 2,
    "ofenlevel": 5,
    "reachable": 3,
    "reachlevel": 9,
    "learned": 3
  },
  {
    "type": 7,
    "level": 3,
    "whom": 2,
    "howoften": 2,
    "ofenlevel": 4,
    "reachable": 3,
    "reachlevel": 5,
    "learned": 3
  },
  {
    "type": 1,
    "level": 4,
    "whom": 4,
    "howoften": 2,
    "ofenlevel": 5,
    "reachable": 1,
    "reachlevel": 8,
    "learned": 1
  },
  {
    "type": 1,
    "level": 6,
    "whom": 4,
    "howoften": 2,
    "ofenlevel": 8,
    "reachable": 1,
    "reachlevel": 10,
    "learned": 1
  },
  {
    "type": 8,
    "level": 8,
    "whom": 2,
    "howoften": 2,
    "ofenlevel": 9,
    "reachable": 2,
    "reachlevel": 9,
    "learned": 5
  },
  {
    "type": 5,
    "level": 6,
    "whom": 2,
    "howoften": 3,
    "ofenlevel": 1,
    "reachable": 3,
    "reachlevel": 4,
    "learned": 4
  },
  {
    "type": 5,
    "level": 4,
    "whom": 3,
    "howoften": 3,
    "ofenlevel": 2,
    "reachable": 3,
    "reachlevel": 8,
    "learned": 4
  },
  {
    "type": 3,
    "level": 4,
    "whom": 1,
    "howoften": 3,
    "ofenlevel": 3,
    "reachable": 2,
    "reachlevel": 9,
    "learned": 1
  },
  {
    "type": 3,
    "level": 5,
    "whom": 4,
    "howoften": 3,
    "ofenlevel": 4,
    "reachable": 2,
    "reachlevel": 2,
    "learned": 1
  },
  {
    "type": 8,
    "level": 6,
    "whom": 2,
    "howoften": 3,
    "ofenlevel": 6,
    "reachable": 3,
    "reachlevel": 2,
    "learned": 5
  },
  {
    "type": 8,
    "level": 7,
    "whom": 3,
    "howoften": 3,
    "ofenlevel": 9,
    "reachable": 3,
    "reachlevel": 2,
    "learned": 5
  },
  {
    "type": 8,
    "level": 5,
    "whom": 2,
    "howoften": 3,
    "ofenlevel": 10,
    "reachable": 3,
    "reachlevel": 10,
    "learned": 5
  },
  {
    "type": 8,
    "level": 4,
    "whom": 3,
    "howoften": 4,
    "ofenlevel": 1,
    "reachable": 3,
    "reachlevel": 6,
    "learned": 5
  },
  {
    "type": 8,
    "level": 8,
    "whom": 3,
    "howoften": 4,
    "ofenlevel": 3,
    "reachable": 3,
    "reachlevel": 9,
    "learned": 5
  },
  {
    "type": 2,
    "level": 5,
    "whom": 1,
    "howoften": 3,
    "ofenlevel": 8,
    "reachable": 1,
    "reachlevel": 9,
    "learned": 1
  },
  {
    "type": 2,
    "level": 3,
    "whom": 2,
    "howoften": 3,
    "ofenlevel": 7,
    "reachable": 2,
    "reachlevel": 8,
    "learned": 1
  },
  {
    "type": 4,
    "level": 6,
    "whom": 2,
    "howoften": 3,
    "ofenlevel": 10,
    "reachable": 2,
    "reachlevel": 7,
    "learned": 4
  },
  {
    "type": 6,
    "level": 10,
    "whom": 1,
    "howoften": 4,
    "ofenlevel": 2,
    "reachable": 1,
    "reachlevel": 10,
    "learned": 2
  },
  {
    "type": 6,
    "level": 5,
    "whom": 1,
    "howoften": 4,
    "ofenlevel": 4,
    "reachable": 2,
    "reachlevel": 10,
    "learned": 2
  },
  {
    "type": 6,
    "level": 3,
    "whom": 1,
    "howoften": 4,
    "ofenlevel": 6,
    "reachable": 3,
    "reachlevel": 1,
    "learned": 2
  },
  {
    "type": 3,
    "level": 4,
    "whom": 1,
    "howoften": 4,
    "ofenlevel": 5,
    "reachable": 2,
    "reachlevel": 8,
    "learned": 5
  }
]