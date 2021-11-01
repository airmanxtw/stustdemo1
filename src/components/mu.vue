// * 九九乘法表 by vue
<template>
  <table>
    <tbody>
      <tr :key="i" v-for="i in [2, 6]">
        <td :key="n" v-for="n in 4">
          <div :key="m" v-for="m in 9">
            {{ n + i - 1 }}x{{ m }}={{ (n + i - 1) * m }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

