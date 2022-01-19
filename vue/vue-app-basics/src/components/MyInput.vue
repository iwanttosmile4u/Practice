<template>
  <input
    type="text"
    class="search"
    @input="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  }
};
</script>
