<template>
  <div class="appBehaviorTrend">
      <div class="" style="height:40px;float: left;">
        <img src="@/assets/img/shu.png" style="height: 20px;">
        <span style="font-size: 14px;position: relative;top: -4px;">行为趋势</span>
      </div>
       <div class="date">
        <date-picker v-model="dateVal" :limit="dataLimitVal" :type="dateTypeVal" @change-date-type="changeDateType" @change-date-limit="changeDateLimit" @change-date="changeDate" @change-week-date="changeWeekDate" @change-month-date="changeMonthDate" :startDate="startDate" :endDate="endDate">
          <span>
            <el-button type="primary" @click="submitData">确定</el-button>
          </span>
        </date-picker>
      </div>
  </div>
</template>

<script>
import datePicker from '@/components/datePicker'
export default {
  name: 'appBehaviorTrend',
   components: {
    datePicker,
  },
  data () {
    return {
      loading: false,
      searchValue: '',
      dateTypeVal: 'week',
      startDate: null,
      endDate: null,
      dataLimitVal: 4,
      dateVal: '',
      weekDateVal: '',
      monthDateVal: '',
      switchVal: false,
      currentPage: 1,
      pageSize: 10,
      orderColumn: '',
      orderType: 'descending',
      total: null,
      tableData: [],
      tableHeader: [],
      chartData: [],
      chartXAxis: [],
      searchData: [],
      searchId: null,
      searchType: null,
      searchLoading: false,
      count: false,
    }
  },
  created() {
    this.fetchDate();

  },
  computed: {
    filterData() {
      const val = this.inputVal
      if (val) {
        return this.mediaList.filter(function(data) {
          return Object.keys(data).some(function(key) {
            return String(data[key]).toLowerCase().indexOf(val) > -1
          })
        })
      }
      return this.mediaList
    }
  },
  watch: {
    $route() {
      this.init();
    }
  },
  methods: {
    init() {
      this.count = false;
      this.switchVal = false;
      this.dateTypeVal = 'week';
      this.dataLimitVal = 4;
      this.currentPage = 1;
      this.pageSize = 10;
      this.orderType = 'descending';
      this.orderColumn = '';
      this.weekDateVal = '';
      this.monthDateVal = '';
      this.tableHeader = [];
      this.fetchDate();
    },
    changeDateType(val) {
      this.dateTypeVal = val;
    },
    changeDateLimit(val) {
      this.dataLimitVal = val;
    },
    changeDate(val) {
      this.dateVal = val;
    },
    changeWeekDate(val) {
      this.weekDateVal = val;
    },
    changeMonthDate(val) {
      this.monthDateVal = val;
    },
    fetchDate() {
      api.date().then(res => {
        this.dateVal = res.data.end;
        this.startDate = res.data.start
        this.endDate = res.data.end
        this.fetchTableData();
      })
    },
    fetchTableData() {
      this.loading = true;
      const params = {
        // 发送请求
        date: this.dateTypeVal === 'week' ? this.weekDateVal : this.monthDateVal,
        dateType: this.dateTypeVal,
        type: this.$route.meta.type,
        limit: this.dataLimitVal,
        pageNo: this.currentPage,
        pageSize: this.pageSize,
        orderType: this.orderType,
        orderColumn: this.orderColumn
      }
      api.trend(params).then(res => {
        this.loading = false;
        this.count = true;
        if (res.data.tableHeader !== null) {
          this.tableHeader = res.data.tableHeader;
        } else {
          this.tableHeader = []
        }
        if (res.data.tableData !== null) {
          this.tableData = res.data.tableData;
        } else {
          this.tableData = []
        }
        if (res.data.echarts.xAxis.length) {
          this.chartXAxis = res.data.echarts.xAxis;
        } else {
          this.chartXAxis = []
        }
        if (res.data.echarts.xAxis.length) {
          this.chartData = res.data.echarts.line;
        } else {
          this.chartData = []
        }
        this.total = res.data.tablePage.total;
      })
    },
    submitData() {
      this.count = false;
      this.currentPage = 1;
      this.fetchTableData();
    },
    // 导出数据
    downloadData() {
      // const params = {
      //   // 发送请求
      //   date: this.dateTypeVal === 'week' ? this.weekDateVal : this.monthDateVal,
      //   dateType: this.dateTypeVal,
      //   type: this.$route.meta.type,
      //   limit: this.dataLimitVal,
      //   pageNo: this.currentPage,
      //   pageSize: this.pageSize,
      //   orderType: this.orderType,
      //   orderColumn: this.orderColumn
      // }
      var path = "http://113.200.91.81/mst/behavior/exportTrendExcel?";
      var paras = "type=" + this.$route.meta.type + "&" +
        "date=" + (this.dateTypeVal === 'week' ? this.weekDateVal : this.monthDateVal) + "&" +
        "dateType=" + this.dateTypeVal + "&" +
        "limit=" + this.dataLimitVal + "&" +
        "pageNo=" + this.currentPage + "&" +
        "pageSize=" + this.pageSize + "&" +
        "orderType=" + this.orderType + "&" +
        "orderColumn=" + this.orderColumn

      window.location.href = path + paras;

    },
    handleSearch(val) {
      if (val.length) {
        this.searchData.filter(item => {

        })
      }
      // const params = {
      //   query: val
      // }
      // if (val !== '') {
      //   this.searchLoading = true;
      //   api.findSearchAppChannel(params).then(res => {
      //     this.searchLoading = false;
      //     // this.searchData = res.data;
      //     function checkName(item) {
      //       return item.name
      //         .indexOf(val.toLowerCase()) != -1;
      //     }
      //     var tempList = res.data;
      //     this.searchData = tempList.filter(checkName);
      //   })
      // } else {
      //   this.searchData = [];
      // }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchTableData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      if (this.count === true) {
        this.fetchTableData();
      }
    },
    changeSort(sort) {
      sort.order = (sort.order ? sort.order : 'descending');
      this.orderColumn = sort.prop;
      this.orderType = sort.order;
      this.fetchTableData();
    },
    linkDetail(row) {
      console.log(row)
      this.$router.push({
        path: `${this.$route.meta.bread.path}/storeDetail/${row.id}/${row.name}`
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
