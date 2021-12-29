<template>
  <div class="post">
    <div>
      <p><b>Title: </b>{{ post.title }}</p>
      <p><b>Description: </b>{{ post.body }}</p>
    </div>
    <div class="post-btns">
      <my-button>Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
