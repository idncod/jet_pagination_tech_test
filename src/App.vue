<template>
  <div class="page-container">
    <div class="container">
      
      <h1>Products</h1>
      
      <div class="row">
        <div v-for="item in data.products" :key="item.id" class="col col-12 col-sm-6 col-lg-3">
          <ProductCard :product="item" />
        </div>
      </div>

      <div class="page-pagination-container">
        <vue-awesome-paginate
          :total-items="data.total"
          :items-per-page="this.count"
          :max-pages-shown="3"
          v-model="currentPage"
          :on-click="onClickHandler"
          prev-button-content="< Previous"
          next-button-content="Next >"
        />
        
        <div>
          <input v-model="count" type="text" @input="countChange()" class="count-input" />
          Items per page
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductCard from './components/ProductCard.vue'
  import { ref } from 'vue'
  
  export default {
    data() {
      return {
        data: {},
        count: 5,
        page: 0,
        currentPage: ref(1)
      };
    },


    mounted() {
        this.fetchData();
    },

    methods: {
      fetchData() {
        const skip = this.count * this.page
        fetch(`https://dummyjson.com/products?limit=${this.count}&skip=${skip}`)
          .then((response) => {
            response.json().then((data) => {
              this.data = data;
            });
          })
          .catch((err) => {
            console.error(err);
          });
      },
      onClickHandler(pg) {
        this.page = pg - 1;
        this.fetchData();
      },
      countChange() {
        if (this.count >= 5 && this.count <= 25) {
          this.fetchData();
        }
        else {
          console.log("Warning: Product count is incorrect");
        }
        
      },
    },
    components: {ProductCard}
  };
</script>

<style>
  @import './styles/base.css';
  @import './styles/pagination.css';
</style>

<style scoped>
  .page-container .col {
    margin-bottom: 30px;
  }

  .page-container .page-pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

  .page-container .page-pagination-container .count-input {
    width: 60px;
    height: 40px;
    text-align: center;
    background-color: #f2f2f2;
    border: none;
    outline: none;
    box-shadow: none;
  }

</style>
