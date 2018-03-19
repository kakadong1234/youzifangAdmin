<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="房子类型">
        <el-select v-model="form.resourceType" placeholder="请选择房子类型">
          <el-option label="V01" value="V01"></el-option>
          <el-option label="V02" value="V02"></el-option>
          <el-option label="V03" value="V03"></el-option>
          <el-option label="V4" value="V4"></el-option>
        </el-select>  
      </el-form-item>
      <el-form-item label="是否已经租出">
        <el-switch v-model="form.isRentOut"></el-switch>
      </el-form-item>
      <el-form-item label="开租时间">
        <el-date-picker type="date" placeholder="请选择开租时间" v-model="form.startDate" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="结租时间">
        <el-date-picker type="date" placeholder="请选择结租时间" v-model="form.endDate" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <!-- <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item> -->
      <el-form-item label="描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple v-model="form.img">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button @click="onDelete" type="danger">删除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getHouse, editHouse, deleteHouse } from '@/api/houses'

export default {
  data() {
    return {
      form: {
        ID: '',
        title: '',
        address: '',
        resourceType: '',
        isRentOut: false,
        startDate: '',
        endDate: '',
        desc: '',
        img: ''
      }
    }
  },
  created() {
    console.log('created')
    const ID = this.$route.path.split('/')[3]
    console.log(ID)
    this.getHouseData(ID)
  },
  methods: {
    getHouseData(ID) {
      getHouse(ID).then(response => {
        console.log(response)
        this.form = response.data
      })
    },
    editHouseData(newHouse) {
      editHouse(newHouse).then(response => {
        this.$message('edit success')
        this.$router.push({ path: '/houses/index' })
      })
    },
    deleteHouseData(ID) {
      deleteHouse(ID).then(response => {
        this.$message('delete success')
        this.$router.push({ path: '/houses/index' })
      })
    },
    onSave() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.editHouseData(this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onDelete() {
      this.deleteHouseData(this.form.ID)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

