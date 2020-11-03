<template>
  <div class="database-dock">
    <ul :style="{width: outerContainerLength + 'px'}">
      <li @mouseover="checkZoomIndex(0)" @mouseout="checkZoomIndex(-999)">
        <div class="database-item"></div>
      </li>
      <li @mouseover="checkZoomIndex(1)" @mouseout="checkZoomIndex(-999)">
        <div class="database-item"></div>
      </li>
      <li @mouseover="checkZoomIndex(2)" @mouseout="checkZoomIndex(-999)">
        <div class="database-item"></div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        zoomIndex: -999,
        databaseList: [
          {},
          {},
          {}
        ]
      }
    },
    methods: {
      checkZoomIndex(index) {
        this.zoomIndex = index;
      }
    },
    computed: {
      outerContainerLength() {
        let {zoomIndex, databaseList} = this;
        return zoomIndex < 0 ? databaseList.length * 80 : databaseList.length * 80 + 30;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .database-dock {
    position: relative;
    width: 100%;
    margin: 20px auto;
    min-width: 1000px;
    height: 100px;

    ul {
      transition: width 0.2s;
      position: relative;
      margin: 0 auto;
      height: 70px;
      top: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: #c7c7c730;
      border: 1.5px solid #323232;
      border-bottom: none;
      border-radius: 8px 8px 0px 0px;

      li {
        list-style: none;

        .database-item {
          transition: width 0.3s, height 0.3s;
          width: 60px;
          height: 60px;
          background-color: #323232;
        }

        .database-item:hover {
          width: 110px;
          height: 100px;
        }
      }
    }
  }
</style>
