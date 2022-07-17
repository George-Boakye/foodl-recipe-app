<template>
  <div class="container">
    <TheNavbar />
    <div class="hero-container">
      <div class="info">
        <h1>Find recipes for the ingredients you have on hand</h1>
        <button @click="$router.push('/list')">Search Now</button>
      </div>
      <div class="left-div">
        <figure class="home-image" @click="
        $router.push({
          name: 'details',
          params: { id: singleFood.strMeal },
        })">
          <img :src="singleFood.strMealThumb" alt="" />
        </figure>
        <div class="black-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavbar from "@/components/TheNavbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    TheNavbar,
  },
  async created() {
    await this.randomFood();
    console.log(this.food);
  },
  computed: {
    ...mapGetters({
      food: "getRandomFood",
    }),
    singleFood() {
      return this.food[0];
    },
  },
  methods: {
    ...mapActions(["randomFood"]),
  },
};
</script>

<style scoped>
.container {
  background-color: #ff9f59;
  background-image: url("@/assets/noise\ 2.png");
}

h1 {
  width: 442px;
  font-weight: 700;
  font-size: 48px;
  line-height: 130%;
  letter-spacing: -0.04em;
}

button {
  padding: 20px 60px;
  background-color: #000;
  color: #fff;
  box-shadow: 0px 16px 40px rgba(192, 86, 10, 0.4);
  border-radius: 8px;
  margin-top: 32px;
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.04em;
  border: none;
}

.hero-container {
  padding: 94px 0 223px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-div {
  height: 640px;
  width: 619px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.black-box {
  width: 392px;
  height: 151px;
  background-color: #000;
  position: absolute;
  right: 0;
}

.home-image {
  width: 619px;
  /* height: 640px; */
  position: relative;
  right: 121px;
  z-index: 2;
  cursor: pointer;
}

.home-image img {
  width: 100%;
  /* height: 100%; */
  border-radius: 50%;
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
}





@media only screen and (max-width:600px) {
  h1{
    font-size: 23px;
    line-height: 100%;
    width:100%
  }
  button{
   padding: 10px 30px;
  }
  .info{
    width: 100%;
    padding: 23px;
  }
  .hero-container{
    padding: 23px;
    flex-direction: column;
  }
  .left-div{
    position: relative;
    width: 100%;
    max-height: 500px;
  }
  .home-image{
    right: 23px;
    top: 0;
   
  }
  .black-box{
    width: 100%;
    right: -23px;
  }
}
</style>
