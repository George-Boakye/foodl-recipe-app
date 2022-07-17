<template>
  <section class="upper-section">
    <TheNavbar />
    <div class="info-search">
      <h2>What ingredients do you have?</h2>
      <div>
        <input type="text" placeholder="search" v-model="searchTerm" />
        <figure class="search-icon">
          <img src="@/assets/charm_search.svg" alt="" />
        </figure>
      </div>
      <figure class="union-icons">
        <img src="@/assets/union.svg" alt="" />
      </figure>
    </div>
  </section>
  <section class="lower-section">
    <div
      class="card"
      v-for="food in searchedFood"
      :key="food.idMeal"
      @click="$router.push({ name: 'details', params: { id: food.strMeal } })"
    >
      <figure class="food-img"><img :src="food.strMealThumb" alt="" /></figure>
      <p>{{ food.strMeal }}</p>
    </div>
  </section>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  async created() {
    await this.searchFood();
  },
  async updated() {
    await this.searchFood(this.searchTerm);
  },
  computed: {
    ...mapGetters({
      searchedFood: "getSearchedFood",
    }),
  },
  methods: {
    ...mapActions(["searchFood"]),
  },
};
</script>

<style scoped>
h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.04em;
  margin-bottom: 24px;
}

.upper-section {
  background: #ff9f59;
  background-image: url("@/assets/noise\ 2.png");
  text-align: center;
  position: relative;
}

.info-search {
  padding: 123px 425px 78px 425px;
}

input {
  width: 576px;
  height: 52px;
  border-radius: 16px;
  outline: none;
  border: none;
  padding-left: 65px;
}

input::placeholder {
  padding-left: 10px;
}

p {
  margin-top: 10px;
  font-weight: 400;
  font-size: 18px;
}

.info-search div {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 15px;
  left: 70px;
}

.union-icons {
  position: absolute;
  top: 0;
  right: 0;
}

.lower-section {
  padding: 104px 120px 292px 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px 20px;
}

.card {
  width: 285px;
  height: 270px;
  background: #ffffff;
  box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 0 18px 28px 18px;
  cursor: pointer;
}

.food-img {
  width: 248px;
  height: 229px;
  border-radius: 8px;
  position: relative;
  bottom: 21px;
}

.food-img img {
  width: 100%;
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

@media only screen and (max-width: 600px) {
  .upper-section {
    width: 100%;
    /* position: static; */
    overflow-x: hidden;
  }

  h2 {
    font-size: 24px;
    line-height: 120%;
  }

  .info-search {
    padding: 23px 23px 73px 23px;
  }
.info-search div{
    z-index: 2;
}
  input {
    width: 100%;
    z-index: 2;
  }
.search-icon{
    left: 40px;
}
  .union-icons {
    right: -165px;
    /* height: 200px; */
    z-index: 1;
  }
  .union-icons img {
    /* width: 100%;
    height: 100%; */
  }
  .lower-section {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 84px 86px;
  }
  .card {
    margin-bottom: 48px;
  }
  
}
</style>