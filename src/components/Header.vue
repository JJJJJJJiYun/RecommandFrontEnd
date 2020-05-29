<template>
  <div>
    <el-header height="120px"></el-header>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#4E8AE4"
      text-color="#FFFFFF"
    >
      <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
      <el-submenu index="2">
        <template slot="title">新闻中心</template>
        <el-menu-item index="2-1">通知公告</el-menu-item>
        <el-menu-item index="2-2">行业咨询</el-menu-item>
        <el-menu-item index="2-3">媒体资讯</el-menu-item>
        <el-menu-item index="2-4">城市动态</el-menu-item>
        <el-menu-item index="2-5">热点新闻</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">技术标准</template>
        <el-menu-item index="3-1">内涵与外延</el-menu-item>
        <el-menu-item index="3-2">技术体系标准</el-menu-item>
        <el-menu-item index="3-3">标准体系介绍</el-menu-item>
        <el-menu-item index="3-4">指标体系介绍</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">联盟活动</template>
        <el-menu-item index="4-1">创意大赛</el-menu-item>
        <el-menu-item index="4-2">项目申报</el-menu-item>
        <el-menu-item index="4-3">论坛活动</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">科技政策</template>
        <el-menu-item index="5-1">国家政策</el-menu-item>
        <el-menu-item index="5-2">部委政策</el-menu-item>
        <el-menu-item index="5-3">地方政策</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">成果转化</template>
        <el-menu-item index="6-1"><a href="/solutions">解决方案</a></el-menu-item>
        <el-menu-item index="6-2"><a href="/tech_results">技术成果</a></el-menu-item>
        <el-menu-item index="6-3"><a href="/cases">典型案例</a></el-menu-item>
        <el-menu-item index="6-4"><a href="/patents">专利库</a></el-menu-item>
        <el-menu-item index="6-5"><a href="/city_needs">城市需求</a></el-menu-item>
        <el-menu-item index="6-6"><a href="/company_needs">企业需求</a></el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">培训咨询</template>
        <el-menu-item index="7-1">专家智库</el-menu-item>
        <el-menu-item index="7-2">培训课堂</el-menu-item>
        <el-menu-item index="7-3">视频专题</el-menu-item>
        <el-menu-item index="7-4">培训活动</el-menu-item>
        <el-menu-item index="7-5">专家观点</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">运行机制</template>
        <el-menu-item index="8-1">平台运行指导办法</el-menu-item>
        <el-menu-item index="8-2">平台运行制度服务</el-menu-item>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">商业机会</template>
        <el-menu-item index="9-1">企业招聘</el-menu-item>
        <el-menu-item index="9-2">招商信息</el-menu-item>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title">关于平台</template>
        <el-menu-item index="10-1">平台简介</el-menu-item>
        <el-menu-item index="10-2">规章制度</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.el-header {
  background-image: url("../assets/header.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
a {
  text-decoration: none;
}
a:link {
  color: white;
}
a:visited {
  color: white;
}
a:hover {
  color: white;
}
a:active {
  color: white;
}
</style>