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
      border
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
      <el-table-column
        label="添加日期">
        <template slot-scope="scope">{{ scope.row.addTime|formatDate }}</template>
      </el-table-column>
      <el-table-column
        label="更新日期">
        <template slot-scope="scope">{{ scope.row.updateTime|formatDate }}</template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="operaTypeTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称"
          :rules="[
            { required: true, message: '名称不能为空', trigger: 'blur' }
          ]"
        >
          <el-input
            type="text"
            placeholder="请输入商品名称"
            v-model="form.goodName"
            maxlength="20"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item label="所属种类"
          :rules="[
              { required: true, message: '种类不能为空', trigger: 'blur' }
          ]"
        >
          <el-select v-model="form.typeId" placeholder="请选择所属种类" style="width:100%">
            <el-option v-for="item in mallTypeList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="销售方式"
          :rules="[
              { required: true, message: '销售方式不能为空', trigger: 'blur' }
          ]"
        >
          <el-select v-model="form.saleTypeId" placeholder="请选择销售方式" style="width:100%">
            <el-option v-for="item in saleTypeList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="库存量"
          :rules="[
              { required: true, message: '库存量不能为空', trigger: 'blur' }
          ]"
        >
          <el-input-number 
            v-model="form.counts" 
            style="width:100%"
            :min="1"  
            label="请输入库存量">
          </el-input-number>
        </el-form-item>
        <el-form-item label="价格"
          :rules="[
              { required: true, message: '价格不能为空', trigger: 'blur' }
          ]"
        >
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
         <el-form-item label="照片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :file-list="form.fileList"
            :limit="1"
            :on-remove="handleRemove"
            :on-change="handleChange"  
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisibleImg">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
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

import {addGoods,delGoods, getGoodList, modGoods,getMallTypeIdList} from '../../../api/data'
export default {
  name : 'saleTypeManage',
  data (){
    return {
      dialogVisible: false,
      fullscreenLoading:false,
      operaTypeId:-1,
      operaTypeTitle:'',
      dialogImageUrl: '',
      dialogVisibleImg: false,
      tableData:[
        { 
          goodId:'',
          goodName:'',
          typeId:'',
          saleTypeId:'',
          counts:'',
          price:'',
          priceDis:'',
          discount:'',
          detail:'',
          fileList:[]
        }
      ],
      multipleSelection: [],
      form: {
        goodId:'',
        goodName:'',
        typeId:'',
        saleTypeId:'',
        counts:'',
        price:'',
        priceDis:'',
        discount:'',
        detail:'',
        fileList:[]
      },
      mallTypeList:[],
      saleTypeList:[],
      saleType:[
      ],
      salePrice:[
      ]
    }
  },
  watch:{
    operaTypeId(val){
      this.operaTypeTitle = this.$store.state.commonmessage.mall[val].dialogtitile;
    },
    fileList(val){
      console.log(val)
    }
  },
  mounted(){
    this.operaTypeId=-1;
    this.getInitData();
  },
  methods:{
    handleChange(file, fileList){
      console.log(file);
      console.log(fileList)
      // this.form.fileList = this.form.fileList.slice(-3);
    },
    handleRemove(file, fileList) {
      console.log('remove img');
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisibleImg = true;
    },
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
    //选择框切换事件监听
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    handleClose(done) {
      this.$confirm('确认关闭?')
        .then(_ => {
          this.dialogCancel();
          done();
        })
        .catch(_ => {});
    },
    copyMessage(parama){
      return JSON.parse(JSON.stringify(parama))
    },
    //新增、修改取消按钮
    dialogCancel(){
      this.dialogVisible = false
      let message = this.copyMessage(this.$store.state.commonmessage.mall[this.operaTypeId].cancel);
      this.$message(message);
    },
    //新增、修改确定按钮
    submit(){
      switch(this.operaTypeId){
        // 新增确认
        case 0:
          this.addConfirm();
          break;
        //修改确认
        case 3:
          this.modifyConfirm();
          break;
      } 
    },
    // 删除操作1
    del(){
      this.operaTypeId = 1;
      if(this.multipleSelection.length<1){
        this.$message.error('请选择要删除的选项');
      }else{
        let warning = this.$store.state.commonmessage.mall[this.operaTypeId].delete.message;
        this.$confirm(warning, '提示', {
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
          console.log(parama);
          delGoods(parama).then((res)=>{
            const {code,message,data} = res.data
            if(code === 200){
              // 删除成功
              this.$message(this.copyMessage(this.$store.state.commonmessage.mall[this.operaTypeId].success));
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
          this.dialogCancel();
        });
      }
    },
    //获取下拉列表的销售种类和销售方式
    getMallTypeIdList(){
      getMallTypeIdList()
      .then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          console.log(data);
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
    },
    // 添加操作开始
    add(){
      this.operaTypeId = 0;
      this.initForm();
      this.getMallTypeIdList();
      this.dialogVisible = true;
    },
    // 添加操作2
    addConfirm() {
      //请求成功
      console.log(this.form);
      // addGoods(this.form).then((res)=>{
      //   const {code,message,data} = res.data
      //   if(code === 200){
      //     this.dialogVisible = false;
      //     this.getInitData();
      //     let message = this.copyMessage(this.$store.state.commonmessage.mall[this.operaTypeId].success);
      //     this.$message(message);
      //     this.fullscreenLoading=false;
      //   }
      //   if(code === 500){
      //     this.$message.error(message);
      //   }
      // }).catch(()=>{
      //       this.fullscreenLoading=false;
      //     })
      // this.fullscreenLoading=false;
    },
    // 查询操作
    query(){
      console.log('query');
      console.log(this.multipleSelection);
    },
    // 修改操作
    modify(){
      this.form.fileList = [{name: 'food.jpeg', url: 'blob:http://localhost:9000/fa483a04-2ab5-4a56-8cf2-15036695f5a0'}];
      this.operaTypeId = 3;
      console.log('modify');
      if(this.multipleSelection.length!=1){
        this.$message({message:'只能选择一项进行修改',type:'warning'});
        return;
      }
      this.getMallTypeIdList();
      this.form = this.copyMessage(this.multipleSelection[0]);
      console.log(this.form)
      this.dialogVisible = true;  
    },
    //修改确认
    modifyConfirm(){
      console.log(this.form);
      modGoods(this.form)
      .then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          // 删除成功
          this.$message(this.$store.state.commonmessage.mall[this.operaTypeId].success);
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
      this.form = {
        goodId:'',
        goodName:'',
        typeId:'',
        saleTypeId:'',
        counts:'',
        price:'',
        priceDis:'',
        discount:'',
        detail:'',
        fileList:[]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mall"
</style>