module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "plugin:prettier/recommended",
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  // rules: {
  // override/add rules settings here, such as:
  // 'vue/no-unused-vars': 'error'
  // }
};
