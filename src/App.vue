<template>
  <Grid id="app">
    <GridRow>
      <p class="w-full text-center text-uppercase text-4xl">
        SƠ ĐỒ CHỖ NGỒI TRẠI THU CHUYỆN LỨA ĐÔI 2019
      </p>
      <span
        class="w-full text-center"
        style="width: 40px; height: 40px;"
        @click="showSettings = !showSettings"
      >
        <Zondicon icon="Cog" class="fill-current text-red" />
      </span>
    </GridRow>
    <GridRow v-if="showSettings" :color="`black`">
      <DiagramSettings @closedSettings="showSettings = false">
        <template v-slot:extend-button>
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mr-2 rounded"
            type="button"
            @click="randomCount++"
          >
            Random
          </button>
        </template>
      </DiagramSettings>
    </GridRow>
    <auto-responsive v-bind="options">
      <div
        v-for="(item, index) in groups"
        :key="index"
        :style="style"
        class="item"
      >
        {{ item }}
      </div>
    </auto-responsive>
  </Grid>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";

const baseStyle = {
  height: "200px",
  width: "200px",
  minHeight: "100px",
  minWidth: "100px",
  lineHeight: "200px",
  cursor: "default",
  color: "#fff",
  borderRadius: "5px",
  boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset",
  backgroundColor: "#ff0000",
  borderColor: "#ff0000",
  fontSize: "80px",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "1px 1px 0px #ab9a3c",
  userSelect: "none"
};

export default {
  name: "App",
  components: {
    Zondicon: () => import("vue-zondicons"),
    Grid: () => import("@/components/Grid"),
    GridRow: () => import("@/components/GridRow"),
    DiagramSettings: () => import("@/components/DiagramSettings")
  },
  data() {
    return {
      randomCount: 0,
      showSettings: true,
      staticOptions: {
        itemMargin: 10,
        horizontalDirection: "left",
        verticalDirection: "top",
        containerHeight: null,
        itemClassName: "item",
        transitionDuration: ".8",
        transitionTimingFunction: "easeIn"
      }
    };
  },
  computed: {
    ...mapFields(["settings.totalGroups", "settings.totalSeatColumns"]),
    ...mapGetters({
      seatRowsPerColumn: "settings/seatRowsPerColumn"
    }),
    options() {
      return {
        ...this.staticOptions
      };
    },
    style() {
      const squareSize = 100 / this.totalSeatColumns + "%";
      return {
        ...baseStyle,
        width: `calc(${squareSize} - 10px)`,
        height: this.gridHeight,
        lineHeight: this.gridHeight
      };
    },
    gridHeight() {
      const dialogHeight = this.showSettings ? "400px" : "200px";
      return `calc((100vh - ${dialogHeight}) / ${this.seatRowsPerColumn})`;
    },
    groups() {
      const groups = [];

      const totalGroups =
        this.totalGroups +
        this.totalSeatColumns -
        this.totalSeatColumns +
        this.randomCount -
        this.randomCount;

      for (let i = 1; i <= totalGroups; i++) {
        groups.push(i);
      }

      return groups.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
