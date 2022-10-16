<template>
    <DxDataGrid id="dataGrid" :data-source="products"></DxDataGrid>
</template>
  
<script>
import 'devextreme/dist/css/dx.light.css';
import { DxDataGrid } from 'devextreme-vue/data-grid';

export default {
    name: 'GridComponent',
    components: {
        DxDataGrid
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    beforeMount() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>
  