import Mock from 'mockjs'

//图表数据
let list = []
export default {
  getData:()=>{
    for(let i = 0 ; i<7 ;i++){
      list.push(
        Mock.mock({
          苹果:Mock.Random.float(100,8000,0,0),
          三星:Mock.Random.float(100,8000,0,0),
          小米:Mock.Random.float(100,8000,0,0),
          华为:Mock.Random.float(100,8000,0,0),
          魅族:Mock.Random.float(100,8000,0,0),
          大奖:Mock.Random.float(100,8000,0,0),
          x1:Mock.Random.float(100,8000,0,0),
        })
      )
    }
    return {
      code: 20000,
      data:{
        //饼图
        videoDat:[
          {
            name:'小米',
            valie: 2999
          },
          {
            name:'苹果',
            valie: 2999
          },
          {
            name:'三星',
            valie: 2999
          },
          {
            name:'华为',
            valie: 2999
          },
          {
            name:'魅族',
            valie: 2999
          },
          {
            name:'大奖',
            valie: 2999
          },
          {
            name:'x1',
            valie: 2999
          }
        ],
        //柱状图
        userData:[
          {
            data: '周一',
            new: 5,
            active: 200
          },
          {
            data: '周一',
            new: 5,
            active: 200
          },
          {
            data: '周一',
            new: 5,
            active: 200
          },
          {
            data: '周一',
            new: 5,
            active: 200
          },
          {
            data: '周一',
            new: 5,
            active: 200
          },
          {
            data: '周一',
            new: 5,
            active: 200
          },
          {
            data: '周一',
            new: 5,
            active: 200
          }
        ],
        //折线图
        orderData: ['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
        //
        tableData:[
          {
            name:'oppo',
            todayBuy:500,
            monthBuy: 3400,
            totalBuy:22000
          },
          {
            name:'oppo',
            todayBuy:500,
            monthBuy: 3400,
            totalBuy:22000
          },
          {
            name:'oppo',
            todayBuy:500,
            monthBuy: 3400,
            totalBuy:22000
          },
          {
            name:'oppo',
            todayBuy:500,
            monthBuy: 3400,
            totalBuy:22000
          },
          {
            name:'oppo',
            todayBuy:500,
            monthBuy: 3400,
            totalBuy:22000
          },
          {
            name:'oppo',
            todayBuy:500,
            monthBuy: 3400,
            totalBuy:22000
          },
          {
            name:'oppo',
            todayBuy:500,
            monthBuy: 3400,
            totalBuy:22000
          }
        ]
      }
    }
  }
}