<template>
  <div class="mall">
    <div class="search">
      <el-input class="input" placeholder="商品名"/>
      <el-input class="input" placeholder="价格范围(大于等于)"/>
      <el-input class="input" placeholder="价格范围(小于等于)"/>
      <el-select class="input" v-model="form.typeId" placeholder="请选择销售状态" style="width:100%">
        <el-option v-for="item in mallTypeList" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-select class="input" v-model="form.typeId" placeholder="请选择所属种类" style="width:100%">
        <el-option v-for="item in mallTypeList" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-button class="button" type="primary" circle icon="el-icon-search" @click="query"/>
      <el-input class="input" placeholder="请输入商品编号精确查找"/>
      <el-button class="button" type="primary" circle icon="el-icon-search" @click="query"/>
    </div>
    <div class="other">
        <el-button class="button" type="success" icon="el-icon-circle-plus-outline" @click="add"></el-button>
        <el-button calss="button" type="warning"  icon="el-icon-edit" @click="modify"/>
        <el-button class="button" type="danger"  icon="el-icon-delete" @click="del"></el-button>
    </div>
    <el-table
      class="table"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading.fullscreen.lock="fullscreenLoading"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"/>
      <el-table-column
        prop="goodId"
        label="商品编号"/>
      <el-table-column
        prop="goodName"
        label="商品名称"/>
      <el-table-column
        label="添加日期">
        <template slot-scope="scope">{{ scope.row.addTime }}</template>
      </el-table-column>
      <el-table-column
        label="修改日期">
        <template slot-scope="scope">{{ scope.row.updateTime|formatDate }}</template>
      </el-table-column>
      <el-table-column
        label="商品库存">
        <template slot-scope="scope">
          <span :style="{'color':scope.row.counts>5?'blue':'red'}">{{ scope.row.counts }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="商品所属种类">
        <template slot-scope="scope">
          {{ scope.row.typeName }}
        </template>
      </el-table-column>
      <el-table-column
        label="商品售卖方式">
        <template slot-scope="scope">
          {{ scope.row.saleTypeName }}
        </template>
      </el-table-column>
      <el-table-column
        label="备注">
        <template slot-scope="scope">
          <span style="color:gray">{{ scope.row.detail }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="图片">
        <template slot-scope="scope">
          <span :style="{'color':scope.row.counts>5?'blue':'red'}">{{ scope.row.counts }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="原定价格">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column
        label="折扣价格">
        <template slot-scope="scope">
          {{ scope.row.priceDis }}
        </template>
      </el-table-column>
      <el-table-column
        label="折扣">
        <template slot-scope="scope">
          {{ scope.row.discount }}
        </template>
      </el-table-column>
      <el-table-column
        label="详细管理">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="operaTypeTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input
            type="text"
            placeholder="请输入商品名称"
            v-model="form.goodsName"
            maxlength="20"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item label="所属种类">
          <el-select v-model="form.typeId" placeholder="请选择所属种类" style="width:100%">
            <el-option v-for="item in mallTypeList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="销售方式">
          <el-select v-model="form.sallType" placeholder="请选择销售方式" style="width:100%">
            <el-option v-for="item in saleTypeList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="库存量">
          <el-input-number 
            v-model="form.counts" 
            style="width:100%"
            :min="1"  
            label="请输入库存量">
          </el-input-number>
        </el-form-item>
        <el-form-item label="价格">
          <el-input
            type="text"
            placeholder="请输入价格"
            v-model="form.price"
          />
        </el-form-item>
        <el-form-item label="折扣价格">
          <el-input
            type="text"
            placeholder="请输入商品折扣价"
            v-model="form.priceDis"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="折扣">
          <el-input
            type="text"
            placeholder="请输入商品折扣"
            v-model="form.discount"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            type="text"
            placeholder="请输入备注"
            v-model="form.detail"
            maxlength="255"
            show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import {addGoods,getGoodList,delGoods,modGoods} from '../../../api/data'
import {getMallTypeIdList} from '../../../api/data'
export default {
  name : 'mallManage',
  data (){
    return {
      dialogVisible: false,
      fullscreenLoading:false,
      operaTypeId:0,
      operaTypeTitle:'',
      tableData:[
        { 
          goodId:'',
          goodName:'',
          addDate:'',
          modifyDate:'',
          mallCounts:'',
        }
      ],

      multipleSelection: [],
      form: {
        goodsId:'',
        goodsName: '',
        typeId:'',
        sallType:'',
        counts: '',
        detail:'',
        price:'',
        priceDis:''
      },
      mallTypeList:[],
      saleTypeList:[],
      saleType:[
        {
          saleTypeId:'01',
          saleTypeName:'按G'
        }
      ],
      salePrice:[
        {
          saleTypeId:'02',
          saleTypeName:'袋重'
        }
      ]
    }
  },
  watch:{
    operaTypeId(val){
      switch(val){
        case 0:
          this.operaTypeTitle='未知'
          break;
        case 2:
          this.operaTypeTitle='新增商品种类'
          break
        case 4:
          this.operaTypeTitle='修改商品种类'
          break
      }
    }
  },
  mounted(){
    this.getInitData();
  },
  methods:{
    //请求列表数据
    getInitData(){
      this.fullscreenLoading = true;
      console.log('@@@@@@@@@@ getGoodList')
      getGoodList().then((res)=>{
        const {code,data} = res.data
        if(code === 200){
          console.log(res);
          this.tableData = data
        }
      })
      this.fullscreenLoading=false;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    
    //新增、修改取消按钮
    dialogCancel(){
      let message = '';
      this.$message({type: 'info',message: '已取消删除'});
      this.dialogVisible=false
      switch(this.operaTypeId){
        // 新增确认
        case 2:
          this.addConfirm();
          break;
        //修改确认
        case 4:
          this.modifyConfirm();
          break;
      } 
    },
    //新增、修改确定按钮
    submit(){
      switch(this.operaTypeId){
        // 新增确认
        case 2:
          this.addConfirm();
          break;
        //修改确认
        case 4:
          this.modifyConfirm();
          break;
      } 
    },
    // 删除操作1
    del(){
      if(this.multipleSelection.length<1){
        this.$message.error('请选择要删除的选项');
      }else{
        this.$confirm('此操作将永久删除种类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fullscreenLoading=true;
          let list=this.multipleSelection.map((item,index)=>{
            return item.goodId;
          })
          let parama = {
            idList: list
          }
          delGoods(parama).then((res)=>{
            const {code,message,data} = res.data
            if(code === 200){
              // 删除成功
              this.$message({type: 'success',message: '删除成功!'});
              this.getInitData();
              this.fullscreenLoading=false;
            }
            if(code === 500){
              this.$message.error(message);
            }
          })
          .catch(()=>{
            this.fullscreenLoading=false;
          })
        }).catch(() => {
          // 取消删除
          this.$message({type: 'info',message: '已取消删除'});
        });
      }
    },
    // 添加操作开始
    add(){
      this.initForm();
      this.getMallTypeIdList();
      this.operaTypeId = 2;
      this.dialogVisible = true;
    },
    // 添加操作2
    addConfirm() {
      console.log('addconfirm');
      console.log(this.form);
      //请求成功
      addGoods(this.form).then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.dialogVisible = false;
          this.getInitData();
          this.fullscreenLoading=false;
        }
        if(code === 500){
          this.$message.error(message);
        }
      }).catch(()=>{
            this.fullscreenLoading=false;
          })
      this.fullscreenLoading=false;
    },
    // 查询操作
    query(){
      console.log('query');
      console.log(this.multipleSelection);
    },
    // 修改操作
    modify(){
      console.log('modify');
      console.log(this.multipleSelection);
      if(this.multipleSelection.length!=1){
        this.$message({message:'只能选择一项进行修改',type:'warning'});
        return;
      }
      this.getMallTypeIdList();
      this.form.goodsName = this.multipleSelection[0].goodName;
      this.form.detail = this.multipleSelection[0].detail;
      this.form.goodsId = this.multipleSelection[0].goodId;
      this.form.counts = this.multipleSelection[0].counts;
      this.form.sallType = this.multipleSelection[0].saleType;
      this.form.typeId = this.multipleSelection[0].mallType;
      this.operaTypeId = 4;
      this.dialogVisible = true;
      console.log(this.form);          
    },
    //修改确认
    modifyConfirm(){
      let parama={
        requestData:this.form
      }
      console.log(parama)
      modGoods(this.form)
      .then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          // 删除成功
          this.$message({type: 'success',message: '修改成功!'});
          this.getInitData();
          this.fullscreenLoading=false;
          this.dialogVisible = false;
        }
        if(code === 500){
          this.$message.error(message);
        }
      })
      .catch(()=>{
        this.fullscreenLoading=false;
      })
    },
    //操作编辑产品类别
    handleEdit(index, row) {
      console.log(index, row);
    },
    //初始化form数据
    initForm(){
      this.form.goodsId=''
      this.form.goodsName=''
      this.form.typeId=''
      this.form.sallType=''
      this.form.counts=''
      this.form.detail=''
    },
    // 获取商品种类list
    getMallTypeIdList(){
      getMallTypeIdList()
      .then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          this.mallTypeList = data.mallTypeList
          this.saleTypeList = data.saleTypeList
        }
        if(code === 500){
          this.$message.error(message);
        }
      })
      .catch(()=>{
        this.fullscreenLoading=false;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mall"
</style>