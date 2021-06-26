<template>
  <div class="home">
    <Card>
      <template #content>
        <h5>FIRE Calculator</h5>
        <div class="p-grid p-fluid">
          <div class="p-col-12 p-md-4">
            <div class="p-field">
              <label for="capital">Capital</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">$</span>

                <InputNumber v-model="capital" placeholder="e.g. 200000" suffix="%" :min="0" :max="100" />
              </div>

              <small id="capital-help">Enter your default capitcal.</small>
            </div>
          </div>
          <div class="p-col-12 p-md-4">
            <div class="p-field">
              <label for="capital">Capital</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">$</span>

                <InputNumber v-model="capital" placeholder="e.g. 200000" suffix="%" :min="0" :max="100" />
              </div>

              <small id="capital-help">Enter your default capitcal.</small>
            </div>
          </div>
          <div class="p-col-12 p-md-4">
            <div class="p-field">
              <label for="capital">Capital</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">$</span>

                <InputNumber v-model="capital" placeholder="e.g. 200000" suffix="%" :min="0" :max="100" />
              </div>

              <small id="capital-help">Enter your default capitcal.</small>
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
  name: 'Home',
  data() {
    return {
      message: null,
      text: null,
    };
  },
  methods: {
    greet() {
      this.message = 'Hello ' + this.text;
    },
  },
};
</script>
