<template>
  <div class="textbox-container">
    <label class="textbox-label">{{data.label}}</label>
    <input class="textbox" type="text" :required="data.required" />
  </div>
</template>

<script >
export default {
  props: ["data"]
};
</script>

<style >
.textbox-container {
  display: grid;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  max-width: 600px;
}

.textbox-label {
  margin-bottom: 3px;
}

.textbox {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  outline-color: #ffffff;
  border-radius: 4px;
  resize: vertical;
  transition: all 0.5s ease-out;
}

.textbox:focus {
  outline-color: #0079c1;
}
</style>