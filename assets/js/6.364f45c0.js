(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{907:function(t,e,i){},964:function(t,e,i){"use strict";var a=i(907);i.n(a).a},994:function(t,e,i){"use strict";i.r(e);var a=i(970),n=i(996),r=(i(991),{name:"LandChart1",props:{chartData:{type:Array},chartTitle:{type:String}},components:{VChart:n.b},provide:Object(a.a)({},n.a,"dark"),data:function(){return{option:{title:{text:this.chartTitle,left:"center"},tooltip:{formatter:function(t){var e=t.value;return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">- 거래일자 : '+e[0]+"<br />- 거래금액 ："+e[1]+"<br/>- 층 ："+e[2]+"</div>"},axisPointer:{type:"cross"}},xAxis:{name:"거래일자",scale:!0,type:"time",distribution:"linear",time:{unit:"day"},splitLine:{lineStyle:{type:"dashed"}},splitNumber:10,nameTextStyle:{fontSize:10}},yAxis:{type:"value",name:"거래금액",splitLine:{lineStyle:{type:"dashed"}},nameTextStyle:{fontSize:10}},series:this.chartData}}}}),o=(i(964),i(119)),s=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("v-chart",{staticClass:"chart",attrs:{option:this.option}})}),[],!1,null,"069e7a77",null);e.default=s.exports}}]);