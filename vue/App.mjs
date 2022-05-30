export default {
  template: `
    <div><h1>TEST{{name}}</h1></div>
  `,
  mixins: [],
  data() {
    return {
      theme: 'AdminLte',
      name: 'AdminLte',
      uuid: '',
    };
  },
  created() {
    console.log(this.name + 'component is created');
    this.uuid = 'idx' + Math.random().toString(36).slice(-6);
  },
  methods: {},
  computed: {},
  mounted() {},
  components: {},
};
