(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t);a(34),a(74),a(53),a(76);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(234),s=a(4),c=a.n(s),m=a(152),d=a(156),p=function(e){var t=e.children;return l.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex w-100 w-50-l fl shadow-5"},l.a.createElement("div",{className:"flex flex-column w-100 ride-body vh-100 lh-body"},l.a.createElement(d.a,{siteTitle:e.site.siteMetadata.title}),t)))},data:o})};p.propTypes={children:c.a.node.isRequired};var u=p,f=[{featureType:"landscape.man_made",elementType:"geometry",stylers:[{color:"#f7f1df"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#d0e3b4"}]},{featureType:"landscape.natural.terrain",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#fbd3da"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#bde6ab"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffe15f"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efd151"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"black"}]},{featureType:"transit.station.airport",elementType:"geometry.fill",stylers:[{color:"#cfb2db"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#a2daf2"}]}],y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).initMap=function(){var e=t.props.activityData.start_latlng,a=t.props.activityData.end_latlng,n=t.props.activityData.map.polyline,r=window.google.maps.geometry.encoding.decodePath(n);window.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:e[0],lng:e[1]},zoom:1,styles:f});var i=new window.google.maps.Polyline({path:r,strokeColor:"#FF4136",strokeOpacity:1,strokeWeight:3}),l=new window.google.maps.LatLngBounds;l.extend({lat:e[0],lng:e[1]}),l.extend({lat:a[0],lng:a[1]}),r.forEach(function(e){l.extend({lat:e.lat(),lng:e.lng()})}),new window.google.maps.Marker({position:{lat:e[0],lng:e[1]},map:window.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:6,fillOpacity:1,fillColor:"#000000",strokeOpacity:0},title:"Start"}),new window.google.maps.Marker({position:{lat:a[0],lng:a[1]},map:window.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:6,fillOpacity:1,fillColor:"#FF2222",strokeOpacity:0},title:"End"}),i.setMap(window.map),window.map.fitBounds(l)},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return this.props.loading?l.a.createElement("div",{id:"map",className:"vh-100 vw-100 bg-near-white ride-map"}):(this.initMap(),l.a.createElement("div",{id:"map",className:"vh-100 vw-100 bg-near-white ride-map"}))},t}(i.Component),g=a(235),h=a.n(g),b=a(168),w=a.n(b),v=a(157),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.showOnMap=function(){var e=this.props,t=e.label,a=e.zoom,n=e.lat,r=e.lng,i={lat:parseFloat(n),lng:parseFloat(r)};new window.google.maps.Marker({position:i,label:{text:t||"",color:"white"}}).setMap(window.map),window.map.panTo(i),window.map.setZoom(parseFloat(a)),document.getElementById("map").scrollIntoView({behavior:"instant",block:"start",inline:"nearest"})},a.render=function(){return l.a.createElement("button",{className:"c-maker-link link pa0 b0 input-reset dim button-reset",onClick:this.showOnMap.bind(this)},l.a.createElement("span",{role:"img","aria-label":"pin"}),this.props.children,"📍",l.a.createElement("sup",{className:"black c-marker-link-label"},this.props.label))},t}(i.Component),k=a(209),T=a.n(k),N=a(210),x=a.n(N),C=function(){return l.a.createElement("svg",{className:"loader",width:"28px",height:"28px",viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round"},l.a.createElement("path",{d:"M2,14 C2,20.627417 7.372583,26 14,26 C20.627417,26 26,20.627417 26,14 C26,7.372583 20.627417,2 14,2",id:"Path",stroke:"#d7d7d7",strokeWidth:"3",fillRule:"nonzero"})))},D=function(e){var t=e.label,a=e.value,n=e.unit;return l.a.createElement("div",{className:"flex flex-column tc pa1 fl w-100 w-50-ns"},l.a.createElement("div",{className:" b--black-05 pa3 br2 c-strava-stats-card"},l.a.createElement("label",{htmlFor:"distance"},t),l.a.createElement("h2",{className:"f3 fw7 mt1 mb0",name:"distance"},a," ",n)))},M=function(e){var t=e.activityData,a=t.distance,n=T.a.round(a/1e3,2),r=t.total_elevation_gain,i=t.calories,o=t.moving_time,s=x.a.utc(1e3*o).format("HH:mm:ss");return e.loading?l.a.createElement("div",{className:"mt4 pv5 c-strava-stats black br3 flex justify-around cf flex-wrap"},l.a.createElement(C,null)):l.a.createElement("div",{className:"c-strava-stats black br2 flex flex-column flex-row-ns justify-around flex-wrap"},l.a.createElement(D,{label:"Distance",value:n||0,unit:"km"}),l.a.createElement(D,{label:"Elevation Gain",value:r||0,unit:"m"}),l.a.createElement(D,{label:"Moving Time",value:s||0,unit:""}),l.a.createElement(D,{label:"Calories",value:i||0,unit:"cal"}))},P=a(254),S=function(e){if(e.loading)return l.a.createElement("p",null);var t=e.data[1].data,a=e.data[2].data,n={tooltips:{mode:"index",intersect:!1,displayColors:!1,xPadding:10,yPadding:10},hover:{mode:"nearest",intersect:!0,animationDuration:1e3},layout:{padding:{left:0}},scales:{yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0.06)",zeroLineColor:"rgba(255, 255, 255, 0.5)"},ticks:{beginAtZero:!1,min:0,autoSkip:!0,autoSkipPadding:10,fontColor:"rgba(0, 0, 0, 1)",callback:function(e){return T.a.round(e,1)+"m"}}}],xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0.1)",display:!1},ticks:{display:!1,callback:function(e){return T.a.round(e,1)+" km"}}}]},legend:{display:!1}},r={labels:T.a.map(t,function(e){return T.a.round(e/1e3,2)}),datasets:[{borderColor:"rgba(0, 0, 0, 0)",borderWidth:0,backgroundColor:"rgba(0, 0, 0, 0.4)",pointRadius:0,pointBorderWidth:0,lineTension:.1,fill:!0,data:a}]};return l.a.createElement("div",{className:"pa1"},l.a.createElement("div",{className:"br2 c-altitude-card near-black"},l.a.createElement("p",{className:"f5 pt4 ph4"},"Elevation"),l.a.createElement("div",{className:"pa4"},l.a.createElement(P.a,{data:r,options:n,width:100,height:20}))))},q=a(160);a(402);a.d(t,"query",function(){return _});var L=new h.a({createElement:l.a.createElement,components:{"marker-link":E}}).Compiler,R=function(e){function t(t){var a;a=e.call(this,t)||this;var n=t.data.queryRouteFiles.edges.filter(function(e){return e.node.base===t.data.queryPost.frontmatter.route_file})[0].node;return a.state={post:t.data.queryPost,loading:!0,routeFile:n},a}r()(t,e);var a=t.prototype;return a.fetchData=function(){var e=this,t="https://www.strava.com/api/v3/activities/"+this.state.post.frontmatter.strava_id,a=[t,t+"/streams/altitude,latlng?resolution=medium"].map(function(t){return fetch(t,{method:"get",headers:{"content-type":"application/json",authorization:"Bearer 011c89ee01402ab591de0240d59ee84455fd4d42"}}).then(function(e){return e.json()}).then(function(t){Array.isArray(t)?e.setState({streams:t}):e.setState({activityData:t})})});Promise.all(a).then(function(t){e.setState({loading:!1})})},a.componentDidMount=function(){this.fetchData()},a.render=function(){return l.a.createElement("div",null,l.a.createElement(q.a,{title:this.state.post.frontmatter.title,keywords:["gatsby","application","react"],description:this.state.post.frontmatter.excerpt,image:this.state.post.frontmatter.cover_image.childImageSharp.fluid.src}),l.a.createElement(u,null,l.a.createElement("div",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.post.frontmatter.cover_image.childImageSharp.fluid.src},l.a.createElement(w.a,{fluid:this.state.post.frontmatter.cover_image.childImageSharp.fluid})),l.a.createElement("div",{className:"center mw8 pa4"},l.a.createElement("div",{className:"pt4 pb3 mb4 mw7 center"},l.a.createElement("h1",{className:"tc f2 f1-l mb3 near-dark lh-title serif"},this.state.post.frontmatter.title),l.a.createElement("p",{className:"tc mt0 mb3 silver lh-copy"},this.state.post.frontmatter.location," •"," ",this.state.post.frontmatter.date," • by"," ",this.state.post.frontmatter.author),l.a.createElement("div",{className:"mv4-l mv3"},l.a.createElement(S,{loading:this.state.loading,data:this.state.streams}),l.a.createElement(M,{loading:this.state.loading,activityData:this.state.activityData?this.state.activityData:0}))),l.a.createElement("div",{className:"markdown-body"},l.a.createElement("div",{className:"lh-copy center f4"},L(this.state.post.htmlAst))),l.a.createElement("div",{className:"mt5 pa4 bg-near-white flex flex-wrap items-start"},l.a.createElement("a",{className:"link w-100 w-auto-l dim db br2 mb3 mb0-l ph3 pv3 mr3-l mr0 tc b tl db white bg-black ttu",href:this.state.routeFile.publicURL},"download gpx"),l.a.createElement("a",{className:"link w-100 w-auto-l dim db br2 mb0 ph3 pv3 tc b tl white db bg-black ttu",href:"https://www.strava.com/activities/"+this.state.post.frontmatter.strava_id},"view strava activity")))),l.a.createElement("div",{className:"db-l dn"},l.a.createElement(v.a,null))),l.a.createElement("div",{className:"w-100 w-50-l top-0 bottom-0 right-0 fl"},l.a.createElement(y,{loading:this.state.loading,activityData:this.state.activityData}),l.a.createElement("div",{className:"db dn-l"},l.a.createElement(v.a,null))))},t}(i.Component),_="2979924133";t.default=R},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(149),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(153),m=a.n(c);a.d(t,"PageRenderer",function(){return m.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),u=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(52),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var n=a(152),r=a(4),i=a.n(r),l=a(0),o=a.n(l),s=function(e){var t=e.siteTitle;return o.a.createElement("div",{className:"c-header near-black pv4 ph2 ph3-l flex justify-between items-center flex-none"},o.a.createElement("h2",{className:"ph3 lh-solid fw9 dim f3-l f4 serif c-header__logo"},o.a.createElement(n.Link,{to:"/",className:"near-black no-underline ttc link"},o.a.createElement("span",{role:"img","aria-label":"mountain"},"🏔"," "),t)),o.a.createElement("nav",{className:"ph3"},o.a.createElement(n.Link,{to:"/rides",className:"san-serif fw3 near-black link dim mr4"},"Rides"),o.a.createElement(n.Link,{to:"/about",className:"san-serif fw3 near-black link dim"},"About")))};s.propTypes={siteTitle:i.a.string},s.defaultProps={siteTitle:""},t.a=s},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"bg-near-white gray pv2 ph2"},l.a.createElement("div",{className:"pa3"},l.a.createElement("p",{className:"lh-title tc lh-copy"},"Built with"," ",l.a.createElement("a",{className:"link dim black",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"),","," ",l.a.createElement("a",{className:"link dim black",href:"http://tachyons.io"},"Tachyons")," ","&"," ",l.a.createElement("a",{className:"link dim black",href:"https://www.gatsbyjs.org"},"Gatsby")," • ","A Project by"," ",l.a.createElement("a",{className:"link dim black",href:"https://twitter.com/p0pmaker"},"Jacky Lee"))))},t}(i.Component);t.a=o},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(174),c=a.n(s),m=a(152);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,s=e.image;return i.a.createElement(m.StaticQuery,{query:p,render:function(e){var n=t||e.DefaultSEO.siteMetadata.description,m=s||e.DefaultImage.edges[0].node.publicURL;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.DefaultSEO.siteMetadata.title,meta:[{name:"description",content:n},{name:"og:image",content:m},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:m},{name:"twitter:creator",content:e.DefaultSEO.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var p="4091074332"},161:function(e){e.exports={data:{DefaultSEO:{siteMetadata:{title:"Goneriding",description:"Publication by Jacky Lee.",author:"@gatsbyjs",image:"src/images/metaImage.png"}},DefaultImage:{edges:[{node:{publicURL:"/goneriding/static/metaImage-d6cc48f04386e7fa4c2eb1542e10c5a2.png"}}]}}}},234:function(e){e.exports={data:{site:{siteMetadata:{title:"Goneriding"}}}}}}]);
//# sourceMappingURL=component---src-templates-post-js-1096a3c9e8e959ad0c3c.js.map