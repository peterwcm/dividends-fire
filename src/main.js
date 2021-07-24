import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createGtm } from 'vue-gtm';

import PrimeVue from 'primevue/config';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(
    createGtm({
        id: 'GTM-M94QLZW',
        vueRouter: router,
        trackOnNextTick: false,
    })
);

app.component('Badge', Badge);
app.component('Button', Button);
app.component('Card', Card);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('InputNumber', InputNumber);
app.component('InputText', InputText);

app.mount('#app')
