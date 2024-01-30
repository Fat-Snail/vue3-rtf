<template>
  <div class="root-div">
    <p></p>
    <span>按钮</span>
    <el-divider />
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary" @click="onClickTest">点 我</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="primary" round>Primary</el-button>
    </el-row>

    <p></p>
    <span>输入框</span>
    <el-divider />
    <el-row class="mb-4">
      <el-input v-model="userName" placeholder="Please input" />
      <el-input v-model="userName" placeholder="Please input">
        <template #prepend>Http://</template>
      </el-input>
    </el-row>
  </div>
</template>

<style scoped>
</style>