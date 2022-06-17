export default {
  template: `
    <div>
       <router-view></router-view>
    </div>
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
