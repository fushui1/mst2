<template>
  <div class="index">
  <el-container>
    <el-header height='30px'>
      <div class='spanDiv'>
        <span>首页</span>
        <span>艾瑞指数</span>
        <span>艾瑞睿见</span>
        <span>艾瑞智云</span>
        <span>关于我们</span>
      </div>
    </el-header>
    <el-container>
          <el-aside style="width:220px;">
             <div class="nav_head">
                <h4 style="">移动渠道市场监测</h4>
                <p>StoreTracker</p>
              </div>
              <div class="channel">
                <i class="el-icon-menu" style="margin:20px 60px 20px -20px;"><span style="margin-left: 20px">渠道</span></i>
              </div>
                <el-menu
                  mode="vertical"
                  default-active="3"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#fff"
                  unique-opened
                  router>
                  <el-submenu :index="1">
                    <template slot="title">
                      <span>行为分析</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="appBehaviorTrend">行为趋势</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="1">
                    <template slot="title">
                      <span>质量分析</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">新装人均次数</el-menu-item>
                      <el-menu-item index="1-1">新装人均时长</el-menu-item>
                      <el-menu-item index="1-1">新装留存</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <div style="height: 40px;margin-top: 15px;">
                  <a href="" style="font-size: 14px;color:#fff;text-decoration: none;">
                      <span style="">渠道画像</span>
                  </a>
                  </div>
                </el-menu>    
              <div class="channel">
                <i class="el-icon-menu" style="margin:20px 60px 20px -20px;"><span style="margin-left: 20px">APP</span></i>
              </div>
              <el-menu
                  mode="vertical"
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#fff"
                  unique-opened>
                  <el-submenu index="1">
                    <template slot="title">
                      <span>行为分析</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">行为趋势</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="1">
                    <template slot="title">
                      <span>质量分析</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">新装人均次数</el-menu-item>
                      <el-menu-item index="1-1">新装人均时长</el-menu-item>
                      <el-menu-item index="1-1">新装留存</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <div style="height: 40px;margin-top: 15px;">
                  <a href="" style="font-size: 14px;color:#fff;text-decoration: none;">
                      <span style="">APP画像</span>
                  </a>
                  </div>
                   <el-submenu index="1">
                    <template slot="title">
                      <span>深度分析</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1">同装分析</el-menu-item>
                      <el-menu-item index="1-1">流向分析</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              <div style="height:40px;">
                
              </div>
      </el-aside>
      <el-main style="background-color: #fff;margin-left: 220px;padding:20px;line-height:0px;">
          
          <router-view></router-view>
      </el-main>
    </el-container>
</el-container>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
}
</script>
<style type="text/css">
  .el-menu-item-group__title{
        padding: 0px;
        height: 0px;
    }
    .el-submenu__title i{
      color: #fff;
      height: 20px;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
    background-color: #69c72b;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: x-small;
  }
  .spanDiv {
    float: left;
  }
  .spanDiv span{
    padding: 5px;
  }
  .el-aside {
    color: #fff;
    text-align: center;
    width: 220px;
    position: fixed;
    left: 0;
    height: 100%;
    overflow-y: auto;
    background-color: #323A45;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  .nav_head {
      text-align: center;
      padding-top: 15px;
      background: #232a32;
      width: 220px;
      padding-bottom: 40px;
    }
    h4:first-child {
        font-size: 20px;
        text-align: center;
        color: #fff;
        margin-bottom: 16px;
      }
      p:last-child {
        width: 120px;
    height: 20px;
    font-size: 13px;
    color: #69c72b;
    padding: 4px 10px;
    text-align: center;
    border: 1px solid #69c72b;
    border-radius: 15px;
    font-weight: 700;
    margin: 0 auto;
      }
      
      
</style>
