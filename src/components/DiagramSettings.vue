<template>
  <div v-if="show" class="container">
    <form class="w-full max-w-sm mx-auto">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="total-groups"
          >
            Total Groups
          </label>
        </div>
        <div class="md:w-2/3">
          <div class="inline-block relative w-64">
            <select
              v-model.number="totalGroups"
              name="total-groups"
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option v-for="group in groups" :key="`group-${group}`">
                {{ group }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="total-seat-columns"
          >
            Total Seat Columns
          </label>
        </div>
        <div class="md:w-2/3">
          <div class="inline-block relative w-64">
            <select
              v-model.number="totalSeatColumns"
              name="total-seat-columns"
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option
                v-for="seatColumn in seatColumns"
                :key="`seat-column-${seatColumn}`"
              >
                {{ seatColumn }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <slot name="extend-button" />
          <button
            class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="$emit('closedSettings')"
          >
            Close
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      maxTotalGroups: 20,
      maxTotalSeatColumns: 5
    };
  },
  computed: {
    ...mapFields(["settings.totalGroups", "settings.totalSeatColumns"]),
    ...mapGetters({
      seatRowsPerColumn: "seatRowsPerColumn"
    }),
    groups() {
      const groups = [];

      for (let i = 1; i <= this.maxTotalGroups; i++) {
        groups.push(i);
      }

      return groups;
    },
    seatColumns() {
      const seatColumns = [];

      for (let i = 1; i <= this.maxTotalSeatColumns; i++) {
        seatColumns.push(i);
      }

      return seatColumns;
    }
  }
};
</script>
