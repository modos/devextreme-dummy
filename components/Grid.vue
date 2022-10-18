<template>
  <div>
    <DxLoadPanel
      :position="loadPanelPosition"
      :visible="isLoading"
    />
    <DxDataGrid
      id="gridContainer"
      key-expr="id"
      :data-source="products"
      :show-borders="false"
      :repaint-changes-only="true"
      @saving="onSaving"
    >
    <DxSearchPanel :visible="true" />
    <DxScrolling mode="infinite" />
    <DxRowDragging
        :allow-reordering="true"
        :on-reorder="onReorder"
        :show-drag-icons="true"
      />
      <DxSorting mode="multiple"/>
      <DxFilterRow :visible="true" />
      <DxGrouping :context-menu-enabled="true"/>
      <DxGroupPanel :visible="true"/>
      <DxMasterDetail
      :enabled="true"
      template="masterDetailTemplate"
    />
    <template #masterDetailTemplate="{ data: products  }">
      <NestedTemplate
        :template-data="products"
      />
    </template>
      <DxEditing
        mode="row"
        :allow-adding="true"
        :allow-deleting="true"
        :allow-updating="true"
        v-model:changes="changes"
        v-model:edit-row-key="editRowKey"
      />
    </DxDataGrid>
  </div>
</template>
<script>
import { DxDataGrid, DxFilterRow, DxScrolling, DxGrouping, DxGroupPanel, DxColumn, DxEditing, DxSorting, DxRowDragging, DxMasterDetail, DxSearchPanel } from 'devextreme-vue/data-grid'
import { DxLoadPanel } from 'devextreme-vue/load-panel'
import { mapGetters, mapActions } from 'vuex'

import 'devextreme/dist/css/dx.light.css'
import NestedTemplate from './NestedTemplate.vue'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxLoadPanel,
    DxSorting,
    DxRowDragging,
    DxScrolling,
    DxFilterRow,
    DxGrouping,
    DxGroupPanel,
    DxMasterDetail,
    DxSearchPanel,
    NestedTemplate
},
  data() {
    return {
      loadPanelPosition: { of: '#gridContainer' },
    }
  },
  computed: {
    ...mapGetters(['products', 'isLoading']),
    editRowKey: {
      get() {
        return this.$store.state.editRowKey
      },
      set(value) {
        this.setEditRowKey(value)
      },
    },
    changes: {
      get() {
        return this.$store.state.changes
      },
      set(value) {
        this.setChanges(value)
      },
    },
    changesText: {
      get() {
        return JSON.stringify(this.changes.map((change) => ({
          type: change.type,
          key: change.type !== 'insert' ? change.key : undefined,
          data: change.data,
        })), null, ' ')
      },
    },
  },
  beforeMount() {
    this.loadProducts()
  },
  methods: {
    ...mapActions(['setEditRowKey', 'setChanges', 'loadProducts', 'insert', 'update', 'remove', 'saveChange']),
    onSaving(e) {
      e.cancel = true
      e.promise = this.saveChange(e.changes[0])
    },
    onReorder(e) {
      const visibleRows = e.component.getVisibleRows()
      const toIndex = this.products .findIndex((item) => item.id === visibleRows[e.toIndex].data.id)
      const fromIndex = this.products .findIndex((item) => item.id === e.itemData.id)
      const newProducts = [...this.products]

      newProducts.splice(fromIndex, 1)
      newProducts.splice(toIndex, 0, e.itemData)
      this.$store.dispatch('reOrder', newProducts)
    },
  },
}
</script>

