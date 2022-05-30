export default {
    inheritAttrs: false,
    template: `
    <div><h1>Test Home</h1> {{uuid}}</div>
    `,
    mixins: [],
    props:["value"],
    data() {
      return {
          theme: 'AdminLte',
          name: 'Home',
          uuid: '',
      };
    },
    created() {
      console.log( this.name + 'component is created');
      this.uuid ='idx'+Math.random().toString(36).slice(-6);
    },
    methods: {
       updateValue(value){
         this.$emit('input',value)
       }
    },
    computed: {},
    mounted() {},
    components:{}
};