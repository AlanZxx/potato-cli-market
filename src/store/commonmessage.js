export default{
    state:
    {
        // 按照增删查改0,1,2,3方式进行新增，成功，失败，等语句提示
        mall:
        [
            {
                dialogtitile:'新增商品',
                success:{type:'success',message:'新增商品成功'},
                cancel:{type:'info',message:'取消新增商品'},
                error:{type:'error',message:'新增商品错误'},
            },
            {
                dialogtitile:'删除商品',
                success:{type:'success',message:'删除商品成功'},
                cancel:{type:'info',message:'取消删除商品'},
                error:{type:'error',message:'删除商品错误'},
                delete:{message:'确认删除商品吗?该操作不可撤销!'}
            },
            {
                dialogtitile:'查询商品',
                success:{type:'success',message:'查询商品成功'},
                cancel:{type:'info',message:'取消查询商品'},
                error:{type:'error',message:'查询商品错误'},
            },
            {
                dialogtitile:'修改商品',
                success:{type:'success',message:'修改商品成功'},
                cancel:{type:'info',message:'取消修改商品'},
                error:{type:'error',message:'修改商品错误'},
            }
        ],
        // 按照增删查改0,1,2,3方式进行新增，成功，失败，等语句提示
        mallType:
        [
            {
                success:{type:'success',message:'新增种类成功'},
                cancel:{type:'info',message:'取消新增种类'},
                error:{type:'error',message:'新增种类错误'},
            },
            {
                success:{type:'success',message:'删除种类成功'},
                cancel:{type:'info',message:'取消删除种类'},
                error:{type:'error',message:'删除种类错误'},
                delete:{message:'确认删除种类吗?该操作不可撤销!'}
            },
            {
                success:{type:'success',message:'查询种类成功'},
                cancel:{type:'info',message:'取消种类商品'},
                error:{type:'error',message:'查询种类错误'},
            },
            {
                success:{type:'success',message:'修改种类成功'},
                cancel:{type:'info',message:'取消修改种类'},
                error:{type:'error',message:'修改种类错误'},
            }
        ],
        saleType:
        [
            {
                dialogtitile:'新增商品销售方式',
                success:{type:'success',message:'新增商品销售方式成功'},
                cancel:{type:'info',message:'取消新增商品销售方式'},
                error:{type:'error',message:'新增商品销售方式错误'},
            },
            {
                dialogtitile:'删除商品销售方式',
                success:{type:'success',message:'删除商品销售方式成功'},
                cancel:{type:'info',message:'取消删除商品销售方式'},
                error:{type:'error',message:'删除商品销售方式错误'},
                delete:{message:'确认删除该销售方式吗?该操作不可撤销!'}
            },
            {
                dialogtitile:'修改商品销售方式',
                success:{type:'success',message:'查询商品销售方式成功'},
                cancel:{type:'info',message:'取消查询商品销售方式'},
                error:{type:'error',message:'查询商品销售方式错误'},
            },
            {
                dialogtitile:'删除商品销售方式',
                success:{type:'success',message:'修改商品销售方式成功'},
                cancel:{type:'info',message:'取消修改商品销售方式'},
                error:{type:'error',message:'修改商品销售方式错误'},
            }
        ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  }