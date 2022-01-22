<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Login:</label>
      <input id="login" class="form-control" v-model.trim="form.login" />
    </div>
    <div class="form-group">
      <label for="login">Email:</label>
      <input
        id="email"
        type="email"
        class="form-control"
        v-model.trim="form.email"
      />
    </div>
    <div class="form-group">
      <label for="login">Password:</label>
      <input
        id="password"
        type="password"
        class="form-control"
        v-model.trim="form.password"
      />
    </div>
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" class="form-control" v-model="form.country">
        <option
          v-for="(country, index) in countries"
          :key="index"
          :value="country.value"
        >
          {{ country.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="themes">Favoirite themes:</label>
      <select
        id="themes"
        class="form-control"
        multiple
        v-model="form.favoriteThemes"
      >
        <option
          v-for="(theme, index) in themes"
          :key="index"
          :value="theme.value"
        >
          {{ theme.label }}
        </option>
      </select>
    </div>
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="notification"
        value="1"
        v-model="form.agreeWithSendEmail"
      />
      <label class="form-check-label" for="notification"
        >Send me info about new courses</label
      >
    </div>
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="notification2"
        value="2"
        v-model="form.agreeWithSendEmail"
      />
      <label class="form-check-label" for="notification"
        >Send me info about new courses 2</label
      >
    </div>
    <div class="flex">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          value="male"
          name="exampleRadios"
          id="male"
          v-model="form.gender"
        />
        <label class="form-check-label" for="male"> Male </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          value="female"
          name="exampleRadios"
          id="female"
          v-model="form.gender"
        />
        <label class="form-check-label" for="female"> Female </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        login: '',
        email: '',
        password: '',
        country: '',
        favoriteThemes: [],
        agreeWithSendEmail: [],
        gender: ''
      },

      countries: [
        {
          label: 'Ukraine',
          value: 'Ukraine'
        },
        {
          label: 'Poland',
          value: 'Poland'
        },
        {
          label: 'Spain',
          value: 'Spain'
        }
      ],

      themes: [
        {
          label: 'Technologies',
          value: 'IT'
        },
        {
          label: 'Languages',
          value: 'languages'
        },
        {
          label: 'Math',
          value: 'Math'
        }
      ]
    };
  },
  validations: {
    form: {
      login: {
        simpleValidator(value) {
          console.log(value);
          return value.length > 5;
        }
      }
    }
  }
};
</script>

<style scoped></style>
