(this["webpackJsonptasty-kitchens"]=this["webpackJsonptasty-kitchens"]||[]).push([[0],{43:function(e,t,n){},52:function(e,t,n){},68:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(33),r=n.n(s),i=n(11),o=n(31),l=n(7),j=n(8),d=n(10),u=n(9),b=n(5),h=n(6),p=n.n(h),x=n(15),m=n(13),O=n.n(m),g=n.p+"static/media/Hat.6a31a10a.svg",f=n.p+"static/media/Rectangle 1456.8ec8fe5f.svg",v=n.p+"static/media/3692584.03f24668.webp",y=(n(43),n(1)),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:"",errorStatus:""},e.updateUserName=function(t){e.setState({username:t.target.value})},e.updatePassword=function(t){e.setState({password:t.target.value})},e.checkUser=function(){var t=Object(x.a)(p.a.mark((function t(n){var a,c,s,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=e.state,c=a.username,s=a.password,"https://apis.ccbp.in/login",r={},r="sumanthkumar"===c&&"sumanthkumar"===s?{username:"rahul",password:"rahul@2021"}:{username:c,password:s},e.commonLogin("https://apis.ccbp.in/login",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.commonLogin=function(){var t=Object(x.a)(p.a.mark((function t(n,a){var c,s,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:"POST",body:JSON.stringify(a)},t.next=3,fetch(n,c);case 3:if(!(s=t.sent).ok){t.next=14;break}return t.next=7,s.json();case 7:r=t.sent,O.a.set("jwt_token",r.jwt_token,{expires:30}),e.setState({errorStatus:""}),e.props.history.replace("/"),t.next=18;break;case 14:return t.next=16,s.json();case 16:i=t.sent,e.setState({errorStatus:i.error_msg});case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.loginAsGuest=function(){e.commonLogin("https://apis.ccbp.in/login",{username:"rahul",password:"rahul@2021"})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,a=e.errorStatus;return void 0!==O.a.get("jwt_token")?Object(y.jsx)(b.a,{to:"/"}):Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)("div",{className:"onlySmallScreen",children:Object(y.jsx)("div",{className:"justBGSmallScreen",children:Object(y.jsx)("img",{className:"smallImg",src:f,alt:"website login"})})}),Object(y.jsx)("div",{className:"extra",children:Object(y.jsxs)("div",{className:"loginDiv",children:[Object(y.jsx)("img",{src:g,className:"notInSmallScreen",alt:"website logo"}),Object(y.jsx)("h1",{className:"notInSmallScreen",children:"Tasty Kitchens"}),Object(y.jsx)("div",{className:"cssHelper",children:Object(y.jsx)("h1",{className:"LoginText",children:"Login"})}),Object(y.jsxs)("form",{onSubmit:this.checkUser,children:[Object(y.jsx)("label",{htmlFor:"un",children:"USERNAME"}),Object(y.jsx)("input",{id:"un",value:t,onChange:this.updateUserName,type:"text",className:"form-control"}),Object(y.jsx)("label",{htmlFor:"pw",children:"PASSWORD"}),Object(y.jsx)("input",{id:"pw",value:n,onChange:this.updatePassword,type:"password",className:"form-control"}),Object(y.jsx)("p",{children:a}),Object(y.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{onClick:this.loginAsGuest,type:"button",className:"btn btn-secondary",children:"Login as a Guest"})]})]})}),Object(y.jsx)("div",{className:"justBG",children:Object(y.jsx)("img",{style:{width:"100%",height:"100vh",objectFit:"cover"},src:v,alt:"website login"})})]})}}]),n}(a.Component),N=n(17),k=function(e){return void 0===O.a.get("jwt_token")?Object(y.jsx)(b.a,{to:"/login"}):Object(y.jsx)(b.b,Object(N.a)({},e))},S=(n(52),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).LogMeOut=function(){O.a.remove("jwt_token"),e.props.history.replace("/login")},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.home,n=e.cart,a=e.diet;return console.log(t,n,a),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(y.jsx)(i.b,{className:"navbar-brand",to:"/",children:Object(y.jsx)("img",{src:g,alt:"website logo"})}),Object(y.jsx)("p",{className:"text",children:" Tasty Kitchen"}),Object(y.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(y.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(y.jsx)("div",{className:"collapse navbar-collapse MakeIt",id:"navbarNavAltMarkup",children:Object(y.jsxs)("ul",{className:"navbar-nav",children:[Object(y.jsx)("li",{children:Object(y.jsx)(i.b,{to:"/diet",className:a?"colorIt nav-item nav-link":"NoColorIt nav-item nav-link",children:Object(y.jsx)("p",{children:"Dietary Restrictions"})})}),Object(y.jsx)("li",{children:Object(y.jsx)(i.b,{className:t?"colorIt nav-item nav-link":"NoColorIt nav-item nav-link",to:"/",children:Object(y.jsx)("p",{children:"Home"})})}),Object(y.jsx)("li",{children:Object(y.jsx)(i.b,{className:n?"colorIt nav-item nav-link":"NoColorIt nav-item nav-link",to:"/cart",children:Object(y.jsx)("p",{children:"Cart"})})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.LogMeOut,children:"Logout"})})]})})]})})}}]),n}(a.Component)),A=Object(b.g)(S),C=n(35),I=n.n(C),D=(n(68),n(69),n(70),n(36)),P=n.n(D),Q=function(e){var t=e.td;return null!==t&&void 0!==t||(t=""),Object(y.jsx)("div",{className:"loader-container",testid:t,children:Object(y.jsx)(P.a,{type:"ThreeDots",color:"green",height:"50",width:"50"})})},L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,car:[]},e.getData=Object(x.a)(p.a.mark((function t(){var n,a,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://apis.ccbp.in/restaurants-list/offers",n=O.a.get("jwt_token"),a={headers:{Authorization:"Bearer ".concat(n)}},t.next=5,fetch("https://apis.ccbp.in/restaurants-list/offers",a);case 5:if(!(c=t.sent).ok){t.next=13;break}return t.next=9,c.json();case 9:s=t.sent,e.setState({car:s.offers,error:!1,isLoading:!1}),t.next=14;break;case 13:e.setState({error:!0,isLoading:!1});case 14:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.car;return e.isLoading?Object(y.jsx)(Q,{td:"restaurants-offers-loader"}):Object(y.jsx)("div",{className:"slider-container",children:Object(y.jsx)(I.a,Object(N.a)(Object(N.a)({},{dots:!0}),{},{children:t.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:e.image_url,alt:"offer",className:"slider-image-width"})},e.id)}))}))})}}]),n}(a.Component),T=n(16),R=n(37),F=(n(89),n(26)),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={activePage:1,isLoading:!0,showDrop:!1,rating:"Lowest"},e.increase=function(){var t=e.state.activePage;20===t?e.setState({activePage:20},(function(){return e.getData()})):e.setState({activePage:t+1},(function(){return e.getData()})),e.getData()},e.decrease=function(){var t=e.state.activePage;1===t?e.setState({activePage:1},(function(){return e.getData()})):e.setState({activePage:t-1},(function(){return e.getData()}))},e.getData=Object(x.a)(p.a.mark((function t(){var n,a,c,s,r,i,o,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=O.a.get("jwt_token"),a=e.state,c=a.activePage,s=a.rating,r="https://apis.ccbp.in/restaurants-list?offset=".concat(9*(c-1),"&limit=9&sort_by_rating=").concat(s),console.log(r),i={headers:{Authorization:"Bearer ".concat(n)}},t.next=8,fetch(r,i);case 8:if(!(o=t.sent).ok){t.next=16;break}return t.next=12,o.json();case 12:l=t.sent,e.setState({data:l.restaurants,isLoading:!1}),t.next=17;break;case 16:e.setState({isLoading:!1});case 17:case"end":return t.stop()}}),t)}))),e.showDropDown=function(){e.setState({showDrop:!0})},e.dropDown=function(t){console.log(t.target.value),e.setState({rating:t.target.value,showDrop:!1},(function(){e.getData()}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.data,a=e.activePage,c=e.rating;return t?Object(y.jsx)(Q,{td:"restaurants-list-loader"}):Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{style:{display:"flex",width:"100vw",justifyContent:"space-around",marginTop:"60px"},children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{style:{fontSize:"32px",paddingBottom:"20px"},children:"Popular Restaurants"}),Object(y.jsx)("p",{children:"Select Your favourite restaurant special dish and make your day happy..."})]}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)("div",{style:{marginTop:"0px",marginRight:"4px"},children:Object(y.jsx)(R.a,{})}),Object(y.jsx)("p",{children:"Sort by "}),c,Object(y.jsxs)("div",{style:{marginTop:"-1px",marginRight:"4px"},children:[Object(y.jsx)("button",{type:"button",className:"newButton",onClick:this.showDropDown,children:Object(y.jsx)(F.c,{})}),Object(y.jsxs)("select",{value:c,onChange:this.dropDown,children:[Object(y.jsx)("option",{value:"Lowest",children:"Lowest"}),Object(y.jsx)("option",{value:"Highest",children:"Highest"})]})]})]})]}),Object(y.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"20px"},children:n.map((function(e){return Object(y.jsx)(i.b,{style:{textDecoration:"none",color:"#334155"},to:"/restaurant/".concat(e.id),children:Object(y.jsxs)("li",{testid:"restaurant-item",id:"box",style:{display:"flex",margin:"10px",width:"30vw",minWidth:"200px"},children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:e.image_url,style:{width:"160px",borderRadius:"10px",marginRight:"6px"},alt:"restaurant"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{className:"resName",style:{fontSize:"18px",fontWeight:"700",lineHeight:"24px"},children:e.name}),Object(y.jsx)("p",{children:e.cuisine}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(T.a,{}),Object(y.jsx)("p",{children:e.user_rating.rating}),Object(y.jsxs)("p",{children:["(",e.user_rating.total_reviews," rating)"]})]})]})]})},e.id)}))}),Object(y.jsxs)("div",{className:"navigationContainer",children:[Object(y.jsx)("button",{className:"button",testid:"pagination-left-button",onClick:this.decrease,children:Object(y.jsx)(F.a,{})})," ","\xa0 \xa0 ",Object(y.jsx)("span",{testid:"active-page-number",children:a})," ","\xa0 of 20 \xa0 \xa0",Object(y.jsx)("button",{className:"button",testid:"pagination-right-button",onClick:this.increase,children:Object(y.jsx)(F.b,{})})]})]})}}]),n}(a.Component),B=(n(90),n(20)),M=function(){return Object(y.jsxs)("div",{className:"footer",style:{backgroundColor:"#0F172A"},children:[Object(y.jsx)("img",{src:"",alt:"website-footer-logo",className:"onss"}),Object(y.jsx)("h1",{style:{color:"white"},children:"Tasty Kitchens"}),Object(y.jsx)("p",{style:{color:"white"},children:"The only thing we are serious about is food. Contact us on"}),Object(y.jsxs)("ul",{className:"socialIconsHolder",children:[Object(y.jsx)("li",{style:{margin:"10px"},children:Object(y.jsx)(B.c,{testid:"pintrest-social-icon",size:40,color:"white"})}),Object(y.jsx)("li",{style:{margin:"10px"},children:Object(y.jsx)(B.b,{testid:"instagram-social-icon",size:40,color:"white"})}),Object(y.jsx)("li",{style:{margin:"10px"},children:Object(y.jsx)(B.d,{size:40,color:"white",testid:"twitter-social-icon"})}),Object(y.jsx)("li",{style:{margin:"10px"},children:Object(y.jsx)(B.a,{size:40,color:"white",testid:"facebook-social-icon"})})]})]})},q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(A,{home:!0}),Object(y.jsx)(L,{}),Object(y.jsx)(E,{}),Object(y.jsx)(M,{})]})}}]),n}(a.Component),U=c.a.createContext({cartItems:[],setCart:function(){},decQuantity:function(){},incQuantity:function(){},orderPlaced:!1,setOrderPlaced:function(){}}),H=n.p+"static/media/cooking1.a9957305.png",G=(n(91),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(y.jsx)(U.Consumer,{children:function(e){var t=e.cartItems,n=e.decQuantity,a=e.incQuantity,c=e.orderPlaced,s=e.setOrderPlaced;console.log("cartItems",t);var r=function(e){n(e)},o=function(e){a(e)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(A,{cart:!0}),Object(y.jsx)("ul",{children:c?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVESURBVHgB3ZtdUhpZFMfPOQ2kJpWaYlaQxswC8HGiSWAF47ylaiTTswJ1BcYVRFcgqA/zNu4AJtH4KPM+I50VhGe07805VyCgDf0JNPyqtCn6gv3/33PvuV8izBj76q1t3eYr2tJlAHyuAW0EKMqtB0VdDdBF0C4o/Fdp1Qbvru1W/3JhhiDMAPvTdoUItgDoV3gsNBJsisumtJTSDffVWQtSJjUD7OZWEQrPdkjTLn9rEWaAmKE9fQDebSutyEhswDyEP0JDV6E6hN5dI6kRiQywL37fJbD25yb8AYOIcF+f1iEmsQywm29tzOePEbECGcAY0etV40QDQURMrecL11kRL3At2lQoXNsXtV2ISKQIsD/XPpDGyH9knihQ792Ns4Ow5UMbsHZZO+biDiwFun6zcfpnmJKhDChdvrvmgmVYIrTWrc7maTWoXGAfIDW/bOIF6aPuo3Y6Uw2wr7b3lyfs/UCHO8YPU0tMumF6e7SmfnhZUFrvuZunh373fA2QPC+pblEDnBnQVb3eut84wbcJcE5trpB4oSgDN78bjwx48bHmQMIZXBaRTtFvoDTWBEzoS+2voAF9uClQya3Wu4M3xiPgSX4HVle8UKScGouCYQT0a/8aYKXavh9jUTCMAMvKV2D1xQtjUTA0QFu4DxlFI7ikqKqe0k83GyeIHv3GsetCXAh2Bi9NE7hfw6MmZBAW39Y/UNVd/95xCXbTKdITdc2LATbEQClVlTVGEwGI4EAGmSRekDasPBVqxucHV/iWucovRHoDGWOa+CF3uTbER1asAfu9fwcyRCjxfdYu32mIiSIq8ZpmLlNT3Sji7Y/bW5AA69bjvg8pMwZEEs/L8WRRotkqZ74y69eZMCCqeCz8mHjIrjmDkOL9OkhI0jwdR3wqq1QIz3HtouZyGohtgojnh1/3y9NYUIEPujDx97iURLyg79TepDyte1TlLnpiqlqwePO1kTdGHuK+PjufeG+KCRkQb0hsgIT6tPt+JmRFvJDYAMjdBT7YqAlZEi8Q54IvkAAkOg6KAmFoQobEy2NhGrs+pmZZ3OhSUxLmJN48N3EIJIoAQR5UUl6YSAhiXuINGr6QBnQhBdIwYa7iGdQcAejpJFPK8S9MYMK8xQtyEo28vNWCFIljwiLEG/K5Nrm/1N2kmeAhUUxYlHgZwov2+3EA4jmkTBgTFlbzIO0fW3I1BvACYeoGmD8yxYRFihdIYUOuw40RXlr6CjDLA448aeJ5gzlXmHtW5kVJ2ay0YQFI+HdenpTkdW7k/SP+mcnegJziQov+ZpMhC2itDwavh3MB3i465EsqI7mM0wX6nvmGBvSHsUew+jRM5uszNhtc9SiQts9L4Yej740ZYKIAdehDhsuGtP3R2hd8zwiVPteanCcrsEKM9vyjkH9hS/bcVqkpdDVS1e+GrwEmTFapKfiE/oCJS2I3L825uuXPCgoObiacERQw4ONQutiu8+7xH7CE8M5Po7N54kwrE2iAsIyHpfl5//l/46QSVC7UqnBn42Rda9WAJUFqPox4IfSyeGfzzOHLMnSMR0FhP0qkfQHe+HzP2WEPspkiu1z1e/yMu1E+FKoPeIh95dikVTPuAaW0kfbuETmTUl3AZ+Pz4rLmaMT9BRohtT41zQWRyADBRIMyBw8lVc5kQcUHM3NVT+kwzC7TNBIbMECMsJRXmXFEpCZ8QGoGjPLzJ6fioXKQ4E1iM3j3hp/ynBSd//eq3oKUmYkBo5jIuIWyRlVG5Ov9OmBRjqeMFRSh5t/nef2QZ27oUdvLQytOxxaFb5JciSKhMjGJAAAAAElFTkSuQmCC"}),Object(y.jsx)("h1",{children:"Payment Successful"}),Object(y.jsx)("p",{children:"Thank you for ordering Your payment is successfully completed."}),Object(y.jsx)(i.b,{to:"/",children:Object(y.jsx)("button",{className:"btn btn-primary",children:"Go To Home Page"})})]}):t===[]||null===t||void 0===t||0===t.length?Object(y.jsxs)("div",{className:"noOrdersDiv",children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:H,alt:"empty cart"})}),Object(y.jsx)("h1",{children:"No Order Yet!"}),Object(y.jsx)("p",{children:"Your cart is empty. Add something from the menu."}),Object(y.jsx)(i.b,{to:"/",children:Object(y.jsx)("button",{className:"btn btn-secondary alp",type:"button",children:"Order now"})})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"30px"},children:[Object(y.jsx)("p",{children:"Item"})," ",Object(y.jsx)("p",{children:"Quantity"})," ",Object(y.jsx)("p",{children:"Price"})]}),t.map((function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("table",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Item"}),Object(y.jsx)("th",{children:"Quantity"}),Object(y.jsx)("th",{children:"Price"})]}),Object(y.jsx)("tr",{children:Object(y.jsxs)("th",{children:[Object(y.jsx)("h1",{className:"dishName",children:e.name}),Object(y.jsx)("img",{className:"dishImage",src:e.imageUrl,alt:e.name})]})})]}),Object(y.jsx)("li",{testid:"cartItem",style:{display:"flex",justifyContent:"space-around",marginTop:"30px"},children:Object(y.jsxs)("div",{className:"oneExtraDiv",children:[Object(y.jsxs)("div",{className:"imageNameContainer",children:[Object(y.jsx)("h1",{className:"dishName",children:e.name}),Object(y.jsx)("img",{className:"dishImage",src:e.imageUrl,alt:e.name})]}),Object(y.jsxs)("div",{className:"OLS",children:[Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"newButton",testid:"decrement-quantity",onClick:function(){return r(e.id)},children:Object(y.jsx)(T.b,{})})}),Object(y.jsx)("p",{testid:"item-quantity",className:"quant",children:e.quantity}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"newButton",testid:"increment-quantity",onClick:function(){return o(e.id)},children:Object(y.jsx)(T.c,{})})})]}),Object(y.jsx)("div",{className:"OLS",testid:"total-price",children:e.cost*e.quantity}),Object(y.jsxs)("div",{className:"Setquant alp",children:[Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"newButton",testid:"decrement-quantity",children:Object(y.jsx)(T.b,{onClick:function(){return r(e.id)}})})}),Object(y.jsx)("h1",{className:"quant",children:e.quantity}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"newButton",testid:"increment-quantity",children:Object(y.jsx)(T.c,{onClick:function(){return o(e.id)}})})}),Object(y.jsx)("div",{testid:"total-price",children:e.cost*e.quantity})]})]})},e.id)]})})),Object(y.jsxs)("div",{className:"order-total",children:[Object(y.jsx)("p",{children:"Order Total :"}),function(){if(t.length>0){for(var e=t[0].quantity*t[0].cost,n=1;n<t.length;n++)e+=t[n].quantity*t[n].cost;return Object(y.jsxs)("p",{children:["\u20b9 ",e]})}return null}()]}),Object(y.jsx)("button",{type:"button",className:"btn btn-info",style:{marginLeft:"80vw"},onClick:function(){console.log("clicked"),s()},children:"Place Order"})]})})]})}})}}]),n}(a.Component)),J=n(25),Y=(n(92),"d0b5791c74fd49378b83e4b3d2135796"),V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleRecipeClick=function(){var e=Object(x.a)(p.a.mark((function e(t){var n,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spoonacular.com/recipes/".concat(t,"/information?apiKey=").concat(Y));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch recipe details");case 6:return c=[],e.next=9,n.json();case 9:(s=e.sent).extendedIngredients.forEach((function(e){c.push(e.nameClean)})),s.allIngredients=c,a.setState({recipeDetails:s,selectedRecipe:t}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),a.setState({error:e.t0});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(){var e=Object(x.a)(p.a.mark((function e(t){var n,c,s,r,i,o,l,j,d,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,c=n.vegetarian,s=n.vegan,r=n.glutenFree,i=n.dairyFree,a.setState({isLoading:!0}),e.prev=3,o={apiKey:Y,diet:[]},c&&o.diet.push("vegetarian"),s&&o.diet.push("vegan"),r&&o.diet.push("gluten free"),i&&o.diet.push("dairy free"),l=new URLSearchParams(o).toString(),console.log("queryString",l),e.next=13,fetch("https://api.spoonacular.com/recipes/complexSearch?".concat(l));case 13:if((j=e.sent).ok){e.next=16;break}throw new Error("Failed to fetch recipes");case 16:return e.next=18,j.json();case 18:d=e.sent,u=d.results,a.setState({recipes:u,isLoading:!1,selectedRecipe:null,recipeDetails:null}),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),a.setState({error:e.t0,isLoading:!1});case 26:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(t){return e.apply(this,arguments)}}(),a.handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,c=t.name;a.setState(Object(J.a)({},c,n))},a.state={vegetarian:!1,vegan:!1,glutenFree:!1,dairyFree:!1,recipes:[],isLoading:!1,error:null,selectedRecipe:null,recipeDetails:null},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.vegetarian,a=t.vegan,c=t.glutenFree,s=t.dairyFree,r=t.recipes,i=t.isLoading,o=t.error,l=t.selectedRecipe,j=t.recipeDetails;return Object(y.jsxs)("div",{className:"body",children:[Object(y.jsx)(A,{diet:!0}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("form",{className:"form-container",onSubmit:this.handleSubmit,children:[Object(y.jsxs)("label",{className:"form-label",children:["Vegetarian:",Object(y.jsx)("input",{className:"form-checkbox",name:"vegetarian",type:"checkbox",checked:n,onChange:this.handleInputChange})]}),Object(y.jsxs)("label",{className:"form-label",children:["Vegan:",Object(y.jsx)("input",{className:"form-checkbox",name:"vegan",type:"checkbox",checked:a,onChange:this.handleInputChange})]}),Object(y.jsxs)("label",{className:"form-label",children:["Gluten-free:",Object(y.jsx)("input",{className:"form-checkbox",name:"glutenFree",type:"checkbox",checked:c,onChange:this.handleInputChange})]}),Object(y.jsxs)("label",{className:"form-label",children:["Dairy-free:",Object(y.jsx)("input",{className:"form-checkbox",name:"dairyFree",type:"checkbox",checked:s,onChange:this.handleInputChange})]}),Object(y.jsx)("button",{type:"submit",children:"Submit"})]}),i&&Object(y.jsx)("p",{children:"Loading recipes..."}),o&&Object(y.jsxs)("p",{children:["Failed to fetch recipes: ",o.message]}),r.length>0&&Object(y.jsxs)("div",{className:"recipeDiv",children:[Object(y.jsx)("p",{children:"Try these Recipe's ...click to know more"}),Object(y.jsx)("ul",{className:"recipeHolder",children:r.map((function(t){return Object(y.jsx)("li",{className:"recipeLi",children:Object(y.jsx)("button",{className:"recipeButton",type:"button",onClick:function(){return e.handleRecipeClick(t.id)},children:t.title})},t.id)}))})]}),l&&Object(y.jsxs)("div",{children:[Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h2",{children:j.title}),Object(y.jsx)("div",{className:"imageDiv",children:Object(y.jsx)("img",{className:"recipeImage",src:j.image,alt:j.title})}),Object(y.jsx)("br",{}),Object(y.jsx)("h3",{className:"ingredients",children:"Ingredients to use:"}),Object(y.jsx)("div",{className:"ingredientsList",children:Object(y.jsx)("div",{style:{textAlign:"center",marginLeft:"60px",marginRight:"60px"},children:l&&j.allIngredients.map((function(e){return Object(y.jsx)("p",{className:"ingredient",children:e})}))})}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("br",{}),Object(y.jsx)("h4",{style:{textAlign:"center"},children:"Procedure"}),Object(y.jsx)("div",{className:"recipe-para-holder",children:j.analyzedInstructions[0].steps.map((function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("p",{className:"recipe-para",children:[Object(y.jsx)("span",{children:JSON.stringify(e.number)})," .",e.step]})})}))})]})]})]})]})}}]),n}(a.Component),W=V,z=n.p+"static/media/Rectangle1399.9922c196.svg",K=(n(93),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0},e.getData=Object(x.a)(p.a.mark((function t(){var n,a,c,s,r,i,o,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=O.a.get("jwt_token"),a=e.props.match,c=a.params,s=c.id,r="https://apis.ccbp.in/restaurants-list/".concat(s),i={headers:{Authorization:"Bearer ".concat(n)}},t.next=8,fetch(r,i);case 8:if(!(o=t.sent).ok){t.next=15;break}return t.next=12,o.json();case 12:(l=t.sent).food_items=l.food_items.map((function(e){return Object(N.a)({quantity:1},e)})),e.setState({data:l,isLoading:!1});case 15:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return Object(y.jsx)(U.Consumer,{children:function(t){var n=e.state,a=n.isLoading,c=n.data,s=t.setCart,r=t.incQuantity,i=t.decQuantity,o=t.cartItems,l=function(e){console.log(o),console.log("e",e);var t=o.filter((function(t){return t.id===e.id}));return console.log("ans",t),console.log(t.quantity),t[0].quantity};return a?Object(y.jsx)(Q,{td:"restaurant-details-loader"}):Object(y.jsxs)("div",{children:[Object(y.jsx)(A,{}),Object(y.jsxs)("div",{className:"noTopPaddingSMC",style:{backgroundImage:"url('".concat(z,"')"),backgroundSize:"cover",padding:"40px",display:"flex",color:"white"},children:[Object(y.jsx)("div",{style:{paddingRight:"20px"},children:Object(y.jsx)("img",{src:c.image_url,alt:"restaurant",className:"resImage"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:c.name}),Object(y.jsx)("p",{children:c.cuisine}),Object(y.jsx)("p",{children:c.location}),Object(y.jsxs)("div",{style:{display:"flex",marginRight:"15px"},children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(T.a,{color:"white"}),Object(y.jsx)("p",{children:c.rating})]}),Object(y.jsxs)("p",{children:[c.reviews_count,"+ Ratings"]})]}),Object(y.jsxs)("div",{style:{marginLeft:"30px"},children:[Object(y.jsx)("p",{children:c.cost_for_two}),Object(y.jsx)("p",{children:"Cost for two"})]})]})]})]}),Object(y.jsx)("div",{children:Object(y.jsx)("ul",{className:"ul",style:{marginTop:"64px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",paddingLeft:"150px"},children:c.food_items.map((function(e){return Object(y.jsxs)("li",{testid:"foodItem",className:"forMobileScreen",style:{display:"flex",width:"40vw",margin:"5px"},children:[Object(y.jsx)("div",{className:"forMB",style:{marginRight:"30px"},children:Object(y.jsx)("img",{className:"imageDish",style:{width:"255px",height:"150px",borderRadius:"8px"},src:e.image_url,alt:e.name})}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(y.jsx)("h1",{children:e.name}),Object(y.jsxs)("div",{className:"moveUpOnSmallScreen",style:{display:"flex"},children:[Object(y.jsx)("span",{children:"\u20b9"}),Object(y.jsx)("p",{children:e.cost})]}),Object(y.jsxs)("div",{className:"moveUpOnSmallScreen",style:{display:"flex"},children:[Object(y.jsx)(T.a,{}),Object(y.jsx)("p",{children:e.rating})]}),Object(y.jsx)("div",{className:"moveUpOnSmallScreen",children:(t=e,0===o.filter((function(e){return e.id===t.id})).length?Object(y.jsx)("button",{type:"button",className:"btn btn-outline-warning",onClick:function(){return function(e){s(e)}(e)},children:"ADD"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("button",{testid:"decrement-count",type:"button",className:"cleanButton",onClick:function(){return i(e.id)},children:Object(y.jsx)(T.b,{})}),Object(y.jsx)("span",{testid:"active-count",children:l(e)}),Object(y.jsx)("button",{testid:"increment-count",type:"button",className:"cleanButton",onClick:function(){return r(e.id)},children:Object(y.jsx)(T.c,{})})]}))})]})]},e.id);var t}))})})]})}})}}]),n}(a.Component)),_=n.p+"static/media/erroring1.9d692275.png",Z=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(A,{}),Object(y.jsx)("img",{src:_,alt:"not found"}),Object(y.jsx)("h1",{children:"Page Not Found"}),Object(y.jsx)("p",{children:"we are sorry, the page you requested could not be found"}),Object(y.jsx)(i.b,{to:"/",children:Object(y.jsx)("button",{type:"button",children:"Home Page"})})]})},X=(n(94),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).placingOrder=function(){a.setState({op:!0}),localStorage.removeItem("cartData"),a.setState({cart:[]})},a.increaseQuantity=function(e){var t=a.state.cart,n=t.findIndex((function(t){return t.id===e}));t[n].quantity=t[n].quantity+1,localStorage.setItem("cartData",JSON.stringify(t)),a.setState({cart:t})},a.decreaseQuantity=function(e){var t=a.state.cart,n=t.findIndex((function(t){return t.id===e}));if(1!==t[n].quantity)t[n].quantity=t[n].quantity-1,localStorage.setItem("cartData",JSON.stringify(t)),a.setState({cart:t});else{var c=t.filter((function(t){return t.id!==e}));localStorage.setItem("cartData",JSON.stringify(c)),a.setState({cart:c})}},a.addCartItem=function(e){var t=a.state.cart;if(!t.includes(e)){var n={quantity:1};n.cost=e.cost,n.imageUrl=e.image_url,n.id=e.id,n.name=e.name,a.setState({cart:[].concat(Object(o.a)(t),[n]),op:!1}),localStorage.setItem("cartData",JSON.stringify([].concat(Object(o.a)(t),[e])))}};var c=localStorage.getItem("cartData");return a.state=null===c?{cart:[],op:!1}:{cart:JSON.parse(c),op:!1},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.cart,n=e.op;return Object(y.jsx)(U.Provider,{value:{cartItems:t,setCart:this.addCartItem,decQuantity:this.decreaseQuantity,incQuantity:this.increaseQuantity,orderPlaced:n,setOrderPlaced:this.placingOrder},children:Object(y.jsxs)(b.d,{children:[Object(y.jsx)(b.b,{exact:!0,path:"/login",component:w}),Object(y.jsx)(k,{exact:!0,path:"/",component:q}),Object(y.jsx)(k,{exact:!0,path:"/cart",component:G}),Object(y.jsx)(k,{exact:!0,path:"/restaurant/:id",component:K}),Object(y.jsx)(k,{exact:!0,path:"/diet",component:W}),Object(y.jsx)(b.b,{component:Z})]})})}}]),n}(a.Component));r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(i.a,{basename:"/TASTYKIT",children:Object(y.jsx)(X,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.c300c308.chunk.js.map