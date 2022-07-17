<template>
  <section class="upper-section">
    <TheNavbar />
    <div class="top-info">
      <figure class="food-img"><img :src="food.strMealThumb" alt="" /></figure>
      <div class="food-info">
        <h2>{{ food.strMeal }}</h2>
        <div class="card-container">
          <div class="category">
            <figure>
              <img src="@/assets/category-icon.svg" alt="" />
              <span>CATEGORY</span>
            </figure>
            <p>{{ food.strCategory }}</p>
          </div>
          <div class="area">
            <figure>
              <img src="@/assets/area-icon.svg" alt="" />
              <span>AREA</span>
            </figure>
            <p>{{ food.strArea }}</p>
          </div>
          <div>
            <figure>
              <img src="@/assets/tags-icon.svg" alt="" />
              <span>TAGS</span>
            </figure>
            <p>{{ food.strTags }}</p>
          </div>
        </div>
      </div>
    </div>
    <figure class="union-icons"><img src="@/assets/union.svg" alt="" /></figure>
  </section>
  <section class="lower-section">
    <div class="ingredient-container">
      <h3>Ingredients</h3>
      <div class="tabs-container">
        <div
          class="tabs"
          v-for="(ingredient, index) in ingredients"
          :key="ingredient"
        >
          <p>{{ ingredient }}</p>
          <div class="mini-tab">
            <p>{{ measures[`strMeasure${index.slice(13)}`] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="instructions">
      <h3>Insructions</h3>
      <p>{{ food.strInstructions }}</p>
    </div>
  </section>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import { mapActions, mapGetters } from "vuex";
var _ = require("lodash");
export default {
  components: {
    TheNavbar,
  },
  props: ["id"],
  async created() {
    await this.searchFood(this.id);
  },
  computed: {
    ...mapGetters({
      searchedFood: "getSearchedFood",
    }),
    food() {
      return this.searchedFood.find((food) => food.strMeal === this.id);
    },
    ingredients() {
      let groupedIngredients = _.pickBy(this.food, function (value, key) {
        return key.substring(0, 13) === "strIngredient";
      });

      let filteredIngredients = _.pickBy(
        groupedIngredients,
        function (value, key) {
          return value !== "";
        }
      );

      return filteredIngredients;
    },
    measures() {
      let groupedMeasures = _.pickBy(this.food, (value, key) => {
        return key.substring(0, 10) === "strMeasure";
      });

      let filteredMeasures = _.pickBy(groupedMeasures, (value, key) => {
        return value !== "";
      });
      return filteredMeasures;
    },
  },
  methods: {
    ...mapActions(["searchFood"]),
  },
};
</script>

<style scoped>
h3{
font-weight: 700;
font-size: 32px;
}
.upper-section {
  background: #ff9f59;
  background-image: url("@/assets/noise\ 2.png");
  text-align: center;
  position: relative;
}

.food-img {
  width: 260px;
  height: 241px;
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.food-img img {
  width: 100%;
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.top-info {
  padding: 69px 0px 0 322px;
  display: flex;
  gap: 0 40px;
  align-items: center;
}

.union-icons {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.card-container {
  margin-top: 24px;
  display: flex;
  gap: 0 16px;
  align-items: center;
}

.card-container div {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05),
    inset 1px 1px 2px rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(94px);
  z-index: 2;
}

.card-container span {
  display: inline-block;
  margin-left: 6px;
}

.lower-section {
  width: 590px;
  margin: 122px auto;
}

.ingredient-container {
  padding: 27px 142px 39px 33px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1),
    inset 0px 4px 2px rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  margin-bottom: 72px;
}

.tabs-container {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tabs {
  height: 33px;
  border: 1px solid #919191;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  padding: 6px 8px;
  cursor: pointer;
}
.tabs p {
  display: inline-block;
  font-size: 16px;
  color: #919191;
}
.tabs:hover {
  background-color: #ff9f59;
  color: #000;
}



.mini-tab {
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
  height: 17px;
  border-radius: 30px;
  background: #aaaaaa;
  padding: 5px;
}
.mini-tab p {
  font-size: 12px;
  line-height: 105%;
  color: #fff;
}

.instructions h3 {
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 32px;
}

@media only screen and (max-width: 600px) {
  .upper-section {
    width: 100%;
    /* position: static; */
    overflow-x: hidden;
  }
  .top-info{
    padding: 23px;
    flex-direction: column;
    z-index: 2;
  }
  .food-img{
    z-index: 2;
  }
  .food-info{
    margin-top: 30px;
  }
  .union-icons {
    right: -165px;
    /* height: 200px; */
    z-index: 1;
  }
  .lower-section{
    width: 100%;  
    padding: 23px;
    margin: 80px auto;
  }
  .ingredient-container{
    padding: 23px;
  }
}
</style>