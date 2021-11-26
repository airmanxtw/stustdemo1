let rules={
    methods: {
        req(v) {
            return v.length > 0 || "請輸入";
          },
          max(v, len) {
            return v.length <= len || `超過${len}字元`;
          },
    },
}

export default rules;