// * 九九乘法表
<template>
  <tbody>
    <tr v-for="i in [2, 6]">
      <td v-for="n in 4">
        <div v-for="m in 9">{{ n + i - 1 }}x{{ m }}={{ (n + i - 1) * m }}</div>
      </td>
    </tr>
  </tbody>
</template>
