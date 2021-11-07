<template>
  <div>
    <div :key="car.key" v-for="car in cars">
      <input placeholder="車型代碼" v-model="car.id" />
      <input placeholder="車型描述" v-model="car.desc" />
      <button @click="delfield(car.key)">刪除</button>
    </div>
    <button @click="newfield">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      cars: [],
    };
  },
  methods: {
    newfield() {
      this.counter++;
      this.cars.push({ key: this.counter, id: "", desc: "" });
    },
    delfield(key) {
      this.cars = this.cars.filter((item) => item.key != key);
    },
  },
};
</script>