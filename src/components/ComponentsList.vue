<template>
    <div class="create-component-list">
      <div v-for="(item,index) in list" :key="index" class="component-item" @click="onItemClick(item)">
        <l-text  v-bind="item"></l-text>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
import LText from '@/components/Ltext.vue'
import { context } from 'ant-design-vue/es/vc-image/src/PreviewGroup'
  export default defineComponent({
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    emits:['on-item-click'],
    name:'component-list',
    components: {
      LText
    },
    setup(props,context) {
      const onItemClick=(data: any)=>{
        context.emit('on-item-click',data)
      }
      return {onItemClick}
    }
  })
  </script>
  
  <style>
  .component-item {
    width: 100px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .component-item > * {
    position: static !important;
  }
  
  </style>