$(document).ready((function(){let e=$(".cmp-sidenav--mobile .cmp-sidenav__selector"),a=$(".cmp-sidenav--mobile .cmp-sidenav__group");e.on("click",(function(){a.slideToggle(),e.toggleClass("expanded"),"false"==$(this).attr("aria-expanded")?$(this).attr("aria-expanded","true"):$(this).attr("aria-expanded","false")}))}));