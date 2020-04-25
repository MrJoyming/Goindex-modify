import Vue from "vue";

var goimg = Vue.component("goimg", {
  data: function () {
    return {
      imgurl: "",
      url:"",
    };
  },
  methods: {
    render(path) {
        this.imgurl = path;
        this.url = window.location.origin + path;
    },
  },
  template: 
  `
    <div class="content">
        <figure class="image">
            <img :src="imgurl" />
            <div class="mdui-textfield">
            <label class="mdui-textfield-label">下载地址</label>
            <input class="mdui-textfield-input" type="text" :value="url"/>
          </div>
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">HTML 引用</label>
            <label class="mdui-textfield-label"> <img src='url' </label>
            <input class="mdui-textfield-input" type="text" value="<img src='url'>" />
          </div>
                <div class="mdui-textfield">
            <label class="mdui-textfield-label">Markdown 引用地址</label>
            <input class="mdui-textfield-input" type="text" value="![](:url)"/>
          </div>
        </figure>
    </div>
  `,
});

export default goimg;
