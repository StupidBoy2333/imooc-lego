<template>
  <div class="content-container">
    <a-row :gutter="16">
      <!-- <template-list ></template-list> -->
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </a-row>
    <a-row type="flex" justify="center">
      <a-button type="primary" size="large">加载更多</a-button>
    </a-row>
  </div>
</template>

<script lang="ts">
import router from "@/routes";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    // TemplateList
  },
  setup() {
    setTimeout(()=>{
      router.push({
        name:'template',
        params:{
          id:1
        }
      })
    },2000)
    return {};
  },
});
</script>

<style>
.page-title {
  color: #fff;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
