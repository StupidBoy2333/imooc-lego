<template>
<div class="editor-container">
  <a-modal
    title="发布成功"
    width="700px"
    :footer="null"
  >
    <publish-form/>
  </a-modal>
  <preview-form ></preview-form>
  <a-layout>
    <a-layout-header class="header">
      <div class="page-title">
        <router-link to="/">
          <img alt="慕课乐高" src="#" class="logo-img">
        </router-link>
        <inline-edit />
      </div>
      <a-menu
        :selectable="false"
        theme="dark"
        mode="horizontal"
      >
        <a-menu-item key="1">
          <a-button type="primary" >预览和设置</a-button>
        </a-menu-item>
        <a-menu-item key="2">
          <a-button type="primary" >保存</a-button>
        </a-menu-item>
        <a-menu-item key="3">
          <a-button type="primary" >发布</a-button>
        </a-menu-item>
        <a-menu-item key="4">
          <user-profile ></user-profile>
        </a-menu-item>
      </a-menu>

    </a-layout-header>
  </a-layout>
  <a-layout>
    <a-layout-sider width="300" style="background: #fff">
      <div class="sidebar-container">
        组件列表
        <components-list />
        <img id="test-image" :style="{ width: '300px' }"/>
      </div>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-layout-content class="preview-container">
        <p>画布区域</p>
        <history-area></history-area>
        <div class="preview-list" id="canvas-area" >
          <div class="body-container" >
          
          </div>
        </div>
      </a-layout-content>
    </a-layout>
    <a-layout-sider width="300" style="background: #fff" class="settings-panel">
      
    </a-layout-sider>  
  </a-layout>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  
  
})
</script>

<style>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.editor-container .preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
.page-title {
  display: flex;
}
.page-title .inline-edit span {
  font-weight: 500;
  margin-left: 10px;
  font-size: 16px;
}
.preview-list.canvas-fix .edit-wrapper > * {
  box-shadow: none !important;
}
.preview-list.canvas-fix {
  position: absolute;
  max-height: none;
}
</style>