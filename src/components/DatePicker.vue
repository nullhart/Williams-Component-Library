<template>
  <div>
    <label class="date-picker-label">{{data.label}}</label>
    <input @change="$emit('updateValue', FieldValue)" v-model="FieldValue" type="date" />
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  props: ["data"],
  data() {
    return { FieldValue: this.data.value };
  },
  methods: {},
  async mounted() {
    if (this.data.value) {
      FieldValue = this.data.value;
    } else if (this.data.value) {
      this.FieldValue = this.data.value;
    } else {
      this.FieldValue = "";
    }
  }
};
</script>

<style>
.date-picker-label {
  display: block;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 3px;
  color: white;
}

input[type="date"] {
  display: block;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  min-height: 1.2em;
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #111b29;
  transition: outline-color 0.5s ease-out;
  color: white;
}

input[type="date"]:focus {
  outline-style: solid;
  outline-color: #0079c1;
  border: 0;
}

[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  width: 100%;
  left: 0px;
  opacity: 0;
}
</style>