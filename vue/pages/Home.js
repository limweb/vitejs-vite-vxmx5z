export default {
  inheritAttrs: false,
  template: `
    <div class="bg-green-200 w-full h-full min-h-screen" >
    <h1 class="bg-red-200 my-5 mx-1 ">TEST AXOIS JSON </h1>
     <div class="w-full bg-blue-200 items-center align-center">
        <ul>
          <li  v-for="(item,idx) in googleArr" :key="idx" >
            No:{{idx+1}}: 
            Fish Name: {{item.fish_name}} /
            Price: {{item.price}}
           </li>
        </ul>
     </div>
     <pre>{{googleArr}}</pre>
    </div>
    `,
  mixins: [],
  props: ['value'],
  data() {
    return {
      theme: 'AdminLte',
      name: 'Home',
      uuid: '',
      googleArr: [],
    };
  },
  created() {
    console.log(this.name + 'component is created');
    this.uuid = 'idx' + Math.random().toString(36).slice(-6);
    this.getdata();
  },
  methods: {
    getdata() {
      axios
        .get('/googleArr.json')
        .then((rs) => {
          this.googleArr = rs.data;
          console.log('rs-->',rs.dat)
        })
        .catch((err) => console.log);
    },
  },
  computed: {},
  mounted() {},
  components: {},
};
