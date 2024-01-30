<template>
  <div>
    <div class="header">
      <h1>My System</h1>
    </div>

    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <a href="#">More</a>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>


<style scoped>
/* 头部样式 */
.header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

/* 导航条 */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* 导航链接 */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* 链接 - 修改颜色 */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
</style>