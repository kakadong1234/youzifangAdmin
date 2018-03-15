<template>
<div class='app-container'>
    <el-button class='create-house-button' @click.native.prevent='createRow()' type="primary">创建</el-button>
    <el-table class='houses-table' :data='tableData' stripe border>
        <el-table-column prop='resourceID' label='资源ID' width='180' :filters='resourceIDFilersData' :filter-method='filterHandler'></el-table-column>
        <el-table-column prop='title' label='姓名' width='180'></el-table-column>
        <el-table-column prop='des' label='描述'></el-table-column>
        <el-table-column prop='address' label='地址'></el-table-column>
        <el-table-column prop='thumbnailUrl' label='缩略图' width='60'>
            <template slot-scope='scope'>
                <img :src="scope.row.thumbnailUrl" height="40">
            </template>
        </el-table-column>
        <el-table-column fixed='right' label='操作' width='220'>
          <template slot-scope='scope'>
            <el-button @click.native.prevent='detailRow(scope.$index, scope.row, scope.column, tableData)' type='info' size='mini'>详情</el-button>
            <el-button @click.native.prevent='editRow(scope.$index, scope.row, scope.column, tableData)' tpye='primary' size='mini'>编辑</el-button>
            <el-button @click.native.prevent='deleteRow(scope.$index, scope.row, scope.column, tableData)' type='danger' size='mini'>删除</el-button>
          </template>
        </el-table-column>
    </el-table>
</div>
</template>


<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
  .create-house-button {
    position: absolute;
    top: 60px;
    right: 20px;
  }
  .houses-table {
    top: 40px;
  }
}
</style>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          resourceID: 'V01',
          title: '房子01',
          des: '房子01很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V02',
          title: '房子02',
          des: '房子02很好很好，非常好',
          address: '上海市金山区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V03',
          title: '房子03',
          des: '房子03很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V04',
          title: '房子04',
          des: '房子04很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V4',
          title: '房子04',
          des: '房子04很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V4',
          title: '房子04',
          des: '房子04很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V4',
          title: '房子04',
          des: '房子04很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V4',
          title: '房子04',
          des: '房子04很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V4',
          title: '房子04',
          des: '房子04很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        },
        {
          resourceID: 'V4',
          title: '房子04',
          des: '房子04很好很好，非常好',
          address: '上海市普陀区金沙江路 1518 弄',
          thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
        }
      ],
      resourceIDFilersData: [
        {
          text: 'V01',
          value: 'V01'
        },
        {
          text: 'V02',
          value: 'V02'
        }
      ]
    }
  },
  methods: {
    filterHandler(value, row, column) {
      return row.resourceID === value
    },
    createRow() {
      console.log('create')
    },
    editRow(index, row, column, data) {
      console.log('edit')
      console.log(index)
      console.log(row)
      console.log(column)
      console.log(data)
    },
    detailRow(index, row, column, data) {
      console.log('detail')
      console.log(index)
      console.log(row)
      console.log(column)
      console.log(data)
    },
    deleteRow(index, row, column, data) {
      console.log('delete')
      console.log(index)
      console.log(row)
      console.log(column)
      console.log(data)
    }
  }
}
</script>

