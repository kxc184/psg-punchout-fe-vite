import { HttpResponse, http } from "msw";

const response = `<!-- Loads Ensighten script -->
    <script type="text/javascript" src="//nexus.ensighten.com/sherwin/dev/Bootstrap.js"></script>
<!-- End Ensighten script -->
<!-- Adobe Tag Manager -->
    <script src="https://assets.adobedtm.com/ad8fc7e306f6/5e3cb8d82987/launch-496ae75465e6-development.min.js" async></script>
<!-- End Adobe Tag Manager --> 
<link rel="stylesheet" href="/etc.clientlibs/tag-aem-swcom/clientlibs/clientlib-base.min.b726b4117241012b27ac64d1caa9e006.css" type="text/css">
<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PHG9GCP');</script>
<!-- End Google Tag Manager -->
<!-- Glassbox -->
    <script id="_cls_detector" data-clsconfig="reportURI=https://report.swp.gbqofs.io/reporting/12c16d47-4cab-43ed-817f-8c79dfad6912/cls_report" src="https://cdn.gbqofs.com/swp/u/detector-dom.min.js"></script>
<!-- End Glassbox -->
<!-- Pype Stream Monitor. -->
                <script type="text/javascript">var app_id="ef6f85d3-abe0-4e23-acec-c01a7f228574";var currentUrl= window.location.href;function insertScript(){var e=document.createElement("script");e.type="text/javascript",e.src="https://web-sandbox.pypestream.com/launcher.js"+"?ts="+Date.now(),e.async=!0,document.body.appendChild(e)}window.pypestreamConfig={APP_ID:app_id,first_name:"na",last_name:"Visitor",phone:"",email:"",screen_name:currentUrl,token:"",passthrough:"",language:"en"},window.addEventListener("load",insertScript);</script>
                <script>var chatOpenSentTime=0,hasGotFirstMessage=!1,trackedUserFirstInteraction=!1,isChatActive="true"===localStorage.getItem("isChatActive");window.addEventListener("message",(function(t){"CHAT_SHOW"===t.data.type&&Date.now()-chatOpenSentTime>2e3&&(dataLayer.push({event:"chat_open"}),chatOpenSentTime=Date.now(),localStorage.setItem("isChatActive","true")),"CHAT_HIDE"===t.data.type&&dataLayer.push({event:"chat_minimize"}),"FIRST_MESSAGE_RECEIVED"!==t.data.type||isChatEnded||(hasGotFirstMessage=!0,dataLayer.push({event:"chat_first_message"})),!hasGotFirstMessage||"ADD_ARIA_LIVE"!==t.data.type||trackedUserFirstInteraction||isChatEnded||(trackedUserFirstInteraction=!0,dataLayer.push({event:"first_interaction"})),"CHAT_ENDED"===t.data.type&&isChatActive&&(dataLayer.push({event:"chat_end"}),trackedUserFirstInteraction=!1,localStorage.setItem("isChatActive","false")),"CHAT_RESTARTED"===t.data.type&&(dataLayer.push({event:"chat_reopen"}),isChatActive=!0,chatOpenSentTime=Date.now(),localStorage.setItem("isChatActive","true"))}),!1);</script>
<!-- End Pype Stream Monitor. -->
<!-- Gigya Script -->
        <script src="https://cdns.gigya.com/js/gigya.js?apikey=3_kYqrS9kb69cPqSm4g9cIot7v9a89oDHqKlWtag6R911BL7PBoEWb6xuqcB9T_213"></script>
<!-- End Gigya Script -->
    <script type="application/ld+json">
        {}
    </script>`;

const url =
  "https://dev-www.sherwin-williams.com/en-us/hclhead.customheaderlibs";
const dictionaryHandlers = [
  http.get(url, () => {
    return HttpResponse.text(response, { status: 200 });
  }),
];

export default dictionaryHandlers;
