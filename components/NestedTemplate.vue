<template>
    <div>
      <img v-for="(image, i) in images" :src="image"  width="64" height="64"/>
    </div>
  </template>
  <script>
  
  import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
  
  export default {
    components: { DxDataGrid, DxColumn },
    props: {
      templateData: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        images: this.templateData.data.images
      };
    },
    methods: {
    },
  };
  </script>
  <style>
  .master-detail-caption {
    padding: 0 0 5px 10px;
    font-size: 14px;
    font-weight: bold;
  }
  </style>
  