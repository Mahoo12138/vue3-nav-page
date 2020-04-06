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
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" @click="toGithub()">
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                </template>
                <span>点击查看网站源码</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn  icon v-on="on"
                            v-clipboard:copy="thisUrl"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError"
                    >
                        <v-icon>mdi-share</v-icon>
                    </v-btn>
                </template>
                <span>点击复制网页链接</span>
            </v-tooltip>

        </v-app-bar>
<!--        <v-btn-->
<!--                fixed-->
<!--                dark-->
<!--                fab-->
<!--                color="pink"-->
<!--                style="top:85%;right: 3%"-->
<!--        >-->
<!--            <v-icon>mdi-plus</v-icon>-->
<!--        </v-btn>-->
        <v-content>
            <v-snackbar
                    v-model="snackbarSwitch"
                    color="rgba(38, 95, 250, 0.623)"
                    :timeout="1500"
            >
                <v-alert
                        class="snack-alert"
                        type="info"
                        dense
                        color="rgba(0, 0, 0, 0)"
                >
                    搜索内容为空！
                </v-alert>
                <v-btn
                        color="pink"
                        text
                        @click="snackbarSwitch = false"
                >
                    关闭
                </v-btn>
            </v-snackbar>
            <v-container>
                <v-col align="center">
                    <v-img  class="engine" :src="currentUrlIcon" @click="changeEngine"></v-img>
                </v-col>
                <v-input
                         background-color="rgba(0,0,0,0)"
                >
                    <v-text-field
                            label="Search"
                            solo
                            v-model="searchContent"
                            append-icon="mdi-search-web"
                            @click:append="search()"
                            @keyup.enter="enterPress()"
                    >
                    </v-text-field>
                </v-input>
            </v-container>
            <website class="content"/>
        </v-content>

        <v-footer
                color="rgba(0,0,0,0.3)"
                app
                dark
        >
            <span class="px-4">Copyright &copy; 2020 Mahoo12138</span>
        </v-footer>
    </v-app>
</template>

<script>
import Website from "@/components/Website/Website"
export default {
  name: 'App',
  components: {
    Website
  },
  computed:{
    currentUrlIcon(){
      return (this.engineSwitch) ? this.engines[0].logo : this.engines[1].logo
    }
  },
  data(){
    return{
      thisUrl: 'https://www.mahoo12138.cn/',
      engines: [
          {
            "url": 'https://www.baidu.com/s?wd=',
            "logo": 'https://cdn.jsdelivr.net/gh/mahoo12138/vue3-nav-page/src/assets/images/baidu-white.png'
          },
          {
            "url": 'https://www.google.com/search?q=',
            "logo": 'https://cdn.jsdelivr.net/gh/mahoo12138/vue3-nav-page/src/assets/images/google-white.png'
          }
        ],
      currentUrl: '',
      engineSwitch: true,
      snackbarSwitch: false,
      searchContent: '',
    }
  },
  methods: {
    enterPress(){
      console.log("按下回车")
      this.search()
    },
    changeEngine(){
        this.engineSwitch = ! this.engineSwitch
        this.currentUrl =  (this.engineSwitch) ? this.engines[0].url : this.engines[1].url
    },
    search(){
      if (this.searchContent === '') {
        console.log(this.currentUrl)
        this.snackbarSwitch = !this.snackbarSwitch
      }else {
        window.open(this.currentUrl + this.searchContent)
        this.searchContent = ''
      }


    },
    toGithub(){
      window.open('https://github.com/Mahoo12138/vue3-nav-page')
    },
    onCopy(e){
      console.log(e.text)
    },
    onError(e){
      console.log(e)
    },
  },
  mounted(){
    this.currentUrl = this.engines[0].url
  },
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
    .content{
        margin-top: -30px;
    }
    .engine{
        width: 20%;
        margin: 20px;
        cursor: pointer;

    }
    .snack-alert{
        padding: 10px 0 0 0;
        margin: 0 !important;
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