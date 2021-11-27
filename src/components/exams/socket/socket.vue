<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <td>id</td>
          <td>current_value</td>
          <td>at</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in pos" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.current_value }}</td>
          <td>{{ p.at }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pos: [],
    };
  },
  created() {
    var websocket = new WebSocket("wss://demo.sewio.net");
    websocket.onopen = () => {
      websocket.send(
        '{"headers":{"X-ApiKey":"171555a8fe71148a165392904"},"method":"subscribe","resource":"/feeds/8"}'
      );
    };
    websocket.onmessage = (res) => {
      this.pos = [...JSON.parse(res.data).body.datastreams];
    };
  },
};
</script>