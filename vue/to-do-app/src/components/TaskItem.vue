<template>
  <div class="task">
    <my-checkbox
      :checked="checked"
      :onCheck="onCheckBoxChange"
      :body="task.body"
    />
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    checked: {
      type: Boolean,
      default: () => false
    },
    onCheck: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    onCheckBoxChange() {
      this.onCheck(this.task.id);
    }
  }
};
</script>

<style lang="scss">
.task {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
