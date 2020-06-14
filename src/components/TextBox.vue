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
  color: white;
}

.textbox {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  resize: vertical;
  transition: outline-color 0.5s ease-out;
  color: white;
  background-color: #111b29;
}

.textbox:focus {
  outline-style: solid;
  outline-color: #0079c1;
  border: 0;
}
</style>