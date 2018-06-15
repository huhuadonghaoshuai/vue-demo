var express = require('express');
var app = express();

var doneList = [
  {
    creditNum: '001',
    custNum: '123101',
    custName: '小舞',
    proName: '腰弓',
    otherWay: '方式1',
    id: '1'
  },
  {
    creditNum: '002',
    custNum: '123102',
    custName: '小w',
    proName: 'shoot',
    otherWay: '方式2',
    id: '2'
  }
]

// 获取post数据
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.post('/api/login',(req,res)=>{
  let name = req.body.name;
  let password = req.body.password;
  let users=[
    {name:'hu',password:'111111'},
    {name:'tu',password:'111111'}
  ]
  let isExist = false;
  users.map(item=>{
    if(item.name === name){
      isExist = true;
      if(item.password === password){
        res.send({
          code:9000,
          message:'成功',
          account:item.name,
          password:item.password,
          accessToken:'eyJhbGciOiJIUzUxMiJ9.eyJyYW5kb21LZXkiOiJqNzNic2IiLCJzdWIiOiJodWl5YW4ueWFuZyIsImV4cCI6MTUyODc4NjY5NCwiaWF0IjoxNTI4MTgxODk0LCJhdXRob3JpdGllcyI6IlJPTEVfU1lTLHJpc2tfZHV0eSxsaW1pdF9jb25maWcsIn0.kRk_NxhGJObZTMBCthoG98nRyCisAz7XY-jTIcwxxfKq0-cVX5pXLG11k_fb-xxOCdecP34BiR9m_NDGXcCkmQ',
          ver:'1.0'
        })
      }else{
        res.send({
          code:'9001',
          message:'密码错误'
        })
      }
    }
  })
})

app.get('/api/done-list',(req,res)=>{
  // console.log(req)
  res.send({
    code:9000,
    message:'成功',
    content:[
      {
        creditNum: '001',
        custNum:'123101',
        custName:'小舞',
        proName:'腰弓',
        otherWay:'方式1',
        id:'1'
      },
      {
        creditNum: '002',
        custNum: '123102',
        custName: '小w',
        proName: 'shoot',
        otherWay: '方式2',
        id:'2'
      }
    ]
  })
})

app.get('/api/toDo-list',(req,res)=>{
  res.send({
    code: 9000,
    message: '成功',
    content: [
      {
        creditNum: '101',
        custNum: '333',
        custName: '呵呵',
        proName: '腰弓',
        otherWay: '方式1'
      },
      {
        creditNum: '102',
        custNum: '555',
        custName: '哈哈',
        proName: 'shoot',
        otherWay: '方式2'
      }
    ]
  })
})

app.delete('/api/done-task/delete',(req,res)=>{
  let id = req.query.id
  // doneList.map((item,index)=>{
  //   console.log(item.id,1)
  //   console.log(index, 2)    
  //   if(item.id === id){
  //     console.log(index,'index')
  //     // doneList.splice(index,1)
  //   }
  // })
  res.send({
    code:9000,
    message:'删除成功'
  })
})

app.listen(8008, () => {
  console.log('服务开始')
});
