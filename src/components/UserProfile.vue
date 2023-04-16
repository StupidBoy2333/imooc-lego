<template>
    <!-- <router-link to="/login" v-if="!user.isLogin">
      <a-button 
        type="primary"  
        class="user-profile-component"
      >
        登录
      </a-button>
    </router-link> -->
    <div>
      <a-dropdown-button  class="user-profile-component">
        <router-link to="template/1">跳转</router-link>
        <template v-slot:overlay>
          <a-menu class="user-profile-dropdown">
            <a-menu-item key="0" >创建作品</a-menu-item>
            <a-menu-item key="1"><router-link to="/works" >我的作品</router-link></a-menu-item>
            <a-menu-item key="2" >登出</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown-button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  
  export default defineComponent({
    name: 'user-profile',
    props: {
      
    },
    setup () {
      
      return {
        
      }
    }
  })
  </script>
  <style>
  .user-profile-dropdown {
    border-radius: 2px !important;
  }
  .user-operation > * {
    margin-left: 30px !important;
  }
  </style>
  