function getSayings(){var a="1Nbn2-8niXdCwGj97raH4PHSv4MJqUhNMu4799G9Qy8s";Tabletop.init({key:a,simpleSheet:!0,callback:function(a){var e=localStorage.getItem("olanSayings");e=JSON.parse(e),(!e||a.length>e.length)&&localStorage.setItem("olanSayings",JSON.stringify(a))}})}function swapSaying(a){if(a&&null!==a||(a=localStorage.getItem("olanSayings"),a=JSON.parse(a)),null===a)$("#olanSays").html("It's a Monday.");else{var e=a.length,n=Math.floor(Math.random()*e),t=a[n].olanSays;t=t.replace(/(?:\r\n|\r|\n)/g,"<br />"),$("#olanSays").html(t)}}jQuery(document).ready(function($){if("undefined"!=typeof Storage){window.console.log("Yay, you have web storage! I think I left my watch in here somewhere...");var a=localStorage.getItem("olanSayings");a=JSON.parse(a),a&&a.length>0?(swapSaying(a),getSayings()):(getSayings(),swapSaying())}});