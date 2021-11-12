const App = {
  data() {
    return {
      title: "List of notes",
      placeholderString: "Enter the title of your note",
      inputValue: "",
      notes: ["Note 1", "Note 2", "Note 3"],
    };
  },

  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    doubleCount() {
      return this.notes.lenght * 2;
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
