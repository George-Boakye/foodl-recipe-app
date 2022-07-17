<template>
    <nav>
        <figure><img src="@/assets/logo.svg" alt=""></figure>
        <div>
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'list' }">Search</router-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 19px 120px;
    z-index: 4;
}
nav div{
    z-index: 2;
}

a {
    text-decoration: none;
    margin-right: 4.5rem;
    color: #000;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
}

a.router-link-exact-active {
    font-weight: 700;
}

@media only screen and (max-width:600px) {
nav div{
    display: none;
}
nav{
    padding: 23px;
}
}


</style>