Vue.createApp({
    data() {
      return {
        status: true, // 切換按鈕狀態
        data: []
      };
    },
    methods: {
      getData() {
        const url = "https://randomuser.me/api/?results=8";
        axios.get(url).then((res) => {
          this.data = res.data.results;
          console.log(this.data);  
        });
      },
  
      
    },
    mounted() {
      this.getData();
    }
  }).mount("#app");
  