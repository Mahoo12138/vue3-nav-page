<template>
    <v-container>
        <v-expansion-panels accordion>
            <v-expansion-panel
                    v-for="(item, i) in website"
                    :key="i"
                    class="panel"
            >
                <v-expansion-panel-header>
                    <p class="category">{{item.title}}</p></v-expansion-panel-header>
                <v-expansion-panel-content>
                    <panel :web-item="item" :key="item.id"></panel>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
  import Panel from "@/components/Website/Panel";
  import data from "@/common/data";
  export default {
    name: "Website",
    data(){
      return{
        website: data
      }
    },
    components: {
      Panel
    }
  }
</script>

<style scoped>
.category{
    line-height: 1;
    margin: 0;
    padding: 2px 0;
}
.panel{
    background: rgba(255,255,255,0.4) !important;
}
</style>