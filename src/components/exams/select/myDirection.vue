// * 方向器 *
// TODO event : rightMove() 選右邊移動鈕
// TODO event : leftMove() 選右邊移動鈕
<template>
  <div>
    <button class="mg" @click="$emit('rightMove')">⇒</button>
    <br />
    <button class="mg" @click="$emit('leftMove')">⇐</button>
  </div>
</template>
<script>
</script>
<style scoped>
.mg {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>