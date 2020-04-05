import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      primary: '#3f51b5',
      secondary: '#009688',
      accent: '#e91e63',
      error: '#f44336',
      warning: '#ff5722',
      info: '#607d8b',
      success: '#4caf50'
    }
  }
});
