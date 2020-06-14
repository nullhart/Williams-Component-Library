<template>
  <div>
    <label class="drop-down-label">{{data.label}}</label>
    <select v-model="FieldValue" @change="$emit('updateValue', FieldValue)" class="input">
      <option v-show="data.hint" :disabled="data.hint" :value="data.hint">data.hint</option>
      <option v-for="(option,i) in data.options" :key="i" :value="option.value">{{option.label}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: ["data"],
  data() {
    return { FieldValue: "" };
  },
  methods: {},
  async mounted() {
    if (this.data.value) {
      this.FieldValue = this.data.value;
    } else {
      this.FieldValue = "";
    }
  }
};
</script>

<style >
.drop-down-label {
  display: block;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 3px;
  color: white;
}

.input {
  font-family: "Open Sans", sans-serif;
  color: white;
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  padding: 12px;
  background-color: #111b29;
}

select {
  background: #fff
    url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgMiAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAwTDEgMkwyIDBIMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=)
    no-repeat scroll 95% center/10px 15px;
}
</style>