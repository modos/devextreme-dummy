<template>
  <div>
    <DxLoadPanel
      :position="loadPanelPosition"
      :visible="isLoading"
    />
    <DxDataGrid
      id="gridContainer"
      key-expr="id"
      :data-source="orders"
      :show-borders="false"
      :repaint-changes-only="true"
      @saving="onSaving"
    >
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
import { DxDataGrid, DxColumn, DxEditing } from 'devextreme-vue/data-grid';
import { DxLoadPanel } from 'devextreme-vue/load-panel';
import { mapGetters, mapActions } from 'vuex';

import 'devextreme/dist/css/dx.light.css';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxLoadPanel,
  },
  data() {
    return {
      loadPanelPosition: { of: '#gridContainer' },
    };
  },
  computed: {
    ...mapGetters(['orders', 'isLoading']),
    editRowKey: {
      get() {
        return this.$store.state.editRowKey;
      },
      set(value) {
        this.setEditRowKey(value);
      },
    },
    changes: {
      get() {
        return this.$store.state.changes;
      },
      set(value) {
        this.setChanges(value);
      },
    },
    changesText: {
      get() {
        return JSON.stringify(this.changes.map((change) => ({
          type: change.type,
          key: change.type !== 'insert' ? change.key : undefined,
          data: change.data,
        })), null, ' ');
      },
    },
  },
  beforeMount() {
    this.loadOrders();
  },
  methods: {
    ...mapActions(['setEditRowKey', 'setChanges', 'loadOrders', 'insert', 'update', 'remove', 'saveChange']),
    onSaving(e) {
      e.cancel = true;
      e.promise = this.saveChange(e.changes[0]);
    },
  },
};
</script>
<style scoped>
#gridContainer {
  height: 440px;
}
</style>

