<template>
  <div class="home">
    <Card>
      <template #content>
        <h5>Addons</h5>
        <div class="p-grid p-fluid">
          <div class="p-col-12 p-md-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
              </span>
              <InputText placeholder="Username" />
            </div>
          </div>

          <div class="p-col-12 p-md-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">$</span>
              <InputNumber v-model="value2" suffix="%" :min="0" :max="100" />
              <span class="p-inputgroup-addon">.00</span>
            </div>
          </div>

          <div class="p-col-12 p-md-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">W</span>
              <InputText placeholder="Website" />
            </div>
          </div>
        </div>

        <form @submit.prevent="greet">
          <InputText type="text" v-model="text" />
          <Button type="submit" label="Submit" />
          <h3>{{ message }}</h3>
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: null,
      text: null,
    };
  },
  methods: {
    greet() {
      this.message = "Hello " + this.text;
    },
  },
};
</script>
