<template>
  <div class="main">
    <database-group-dock/>

<!--    <div class="table-container">-->

<!--    </div>-->

<!--    <database-dock/>-->
  </div>
</template>

<script>
  import DatabaseDock from "./database-component/DatabaseDock";
  import DatabaseGroupDock from "./database-component/DatabaseGroupDock";

  export default {
    name: "Main",
    components: {
      DatabaseGroupDock,
      DatabaseDock
    },
  }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100%;
    margin: 0 auto;
    min-width: 900px;
  }

  .table-container {
    position: relative;
    margin: 50px auto;
    width: 85%;
    height: 450px;
    border: 1px solid #323232;
  }

</style>
