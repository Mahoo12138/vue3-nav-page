<template>
    <v-app>
        <div id="web_bg"></div>
        <v-app-bar
                dark
                app
                fixed
                flat
                color="rgba(0,0,0,0.3)"
        >

            <v-toolbar-title>黄同学的导航</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark icon>
                <v-icon>mdi-share</v-icon>
            </v-btn>
        </v-app-bar>
        <v-btn
                fixed
                dark
                fab
                color="pink"
                style="top:85%;right: 3%"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-content>
            <v-container>
                <v-col align="center"> <v-img  class="engine" src="./assets/images/baidu-white.png" v-on="on"></v-img></v-col>
                <v-input >
                    <v-text-field
                            label="Search"
                            solo
                            append-icon="mdi-web"
                            @click:append="test()"
                    >
                    </v-text-field>
                </v-input>
            </v-container>
            <website class="content"/>
        </v-content>

        <v-footer
                color="rgba(0,0,0,0.3)"
                app
        >
            <span class="px-4">&copy; 2020 </span>
        </v-footer>
    </v-app>
</template>

<script>
import Website from "@/components/Website/Website";
export default {
  name: 'App',

  components: {
    Website
  },

  data: () => ({
    //
  }),
  methods: {
    test(){
      console.log('search')
    }
  }
};
</script>
<style>
    @import "assets/css/base.css";
    #web_bg {
        background-image: url("./assets/images/background.jpg");
        position: absolute;
        background-position: center 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .fab-backtop{
        top: 90%;
        right: 2%;
    }
    .content{
        margin-top: -30px;
    }
    .engine{
        width: 20%;
        margin: 20px;
    }
    @media screen and (max-width: 500px) {
        .engine{
            width: 50%;
            margin: 10px;
        }
    }
    @media screen and (max-width: 768px) {
        .engine{
            width: 45%;
        }
    }
</style>