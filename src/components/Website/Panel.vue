<template>
    <v-row no-gutters>
        <v-col
                v-for="(item, i) in website"
                :key="i"
                cols="12"
                lg="4"
                sm="6"
        >
            <v-card
                    class="pa-0 ma-2 web-site"
                    outlined
                    tile
            >
                <div class="web-icon" >
                    <v-avatar>
                       <v-img :src="item.icon"/>
                    </v-avatar>
                </div>

                <div class="web-content">
                    <p class="web_title font-weight-black">{{item.title}}</p>
                    <p class="web_disc">{{item.disc}}</p>
                </div>

            </v-card>
        </v-col>
    </v-row>
</template>

<script>
  export default {
    name: "Panel",
    data(){
      return{
        website: this.webItem.item
      }
    },
    props: {
      webItem:{
        type: Object,
        required: true
  }
    },
    mounted(){
      console.log(this.webItem)
    }
  }
</script>

<style scoped lang="less">
    .web-site{
        background: rgba(255,255,255,0.4) !important;
        display: flex;padding: 10px;
        display: -webkit-flex; /* Safari */
        align-items:center;/*指定垂直居中*/
        .web-icon{
            flex: 2;text-align: center;
        }
        .web-content{
            flex: 7;padding: 10px 0;
            .web_disc{
                margin-bottom: 5px;
            }
            .web_title{
                margin: 5px 0 0 0;
            }
        }

    }

</style>