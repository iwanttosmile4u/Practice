<template>
  <div class="user-card">
    <h1>I teach you to earn money!</h1>
    <div class="main-info">
      <div class="info">
        <h2>{{ getAuthorFullName }}</h2>
        <strong>Business couch</strong>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
    <p>Participants: {{ users.length }}</p>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ `${index + 1} ${getFullName(user)}` }}
      </li>
    </ul>
    <button type="button" @click="currentPage--">Prev</button>
    <button
      type="button"
      v-for="page in pages"
      :key="page"
      @click="currentPage = page"
    >
      {{ page }}
    </button>
    <button type="button" @click="currentPage++">Next</button>
    <p>Page {{ currentPage }} from {{ pages }}</p>
  </div>
</template>

<script>
export default {
  name: 'userCard',
  data() {
    return {
      firstName: 'Tom',
      lastName: 'Ford',
      users: [
        {
          firstName: 'Tom',
          lastName: 'Johns'
        },
        {
          firstName: 'Ben',
          lastName: 'Dou'
        },
        {
          firstName: 'Ann',
          lastName: 'Rou'
        }
      ],
      pages: 3,
      currentPage: 1
    };
  },
  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.lastName}`.toUpperCase();
    },
    loadUsers(page) {
      console.log(`Users loading: page is ${page}`);
    }
  },
  computed: {
    getAuthorFullName() {
      return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
  },
  watch: {
    currentPage(page) {
      this.loadUsers(page);
    }
  }
};
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  font-weight: 700;
  color: #333333;
  margin-top: 0;
}

.flex {
  display: flex;
}

.list {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

li {
  font-size: 16px;
  margin-bottom: 14px;
}

.conatiner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
