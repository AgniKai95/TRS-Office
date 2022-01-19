var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
//var oldurlTutorial = "https://maps.vpit.dbmc.comp.db.de/DB-Buero/pilot/tutorial.html";
//var oldurlFeedback = "https://maps.vpit.dbmc.comp.db.de/DB-Buero/pilot/feedback.html";
//var urlFeedback = "mailto:DB.Systel.CommunicationServices.EVS@deutschebahn.com";
var urlFeedback = "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u";

var urlInfo = "https://db.de/workadventure";
var urlInfoOrder = "https://dbserviceportal.service-now.com/serviceportal?id=sc_cat_item&category_sys_id=undefined&sys_id=0fa1b33e1b4bf010159842229b4bcb0e";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneFeedback = "feedback";
var zoneTutorial = "tutorial";
var zoneInfo = "info";
var zoneInfoOrder = "info-order";

WA.room.onEnterZone(zoneTutorial, () => {
   currentPopup =  WA.ui.openPopup("popUpTutorial","Tutorial ansehen?",[
        {
            label: "OK",
            callback: (popup => {
                WA.nav.openCoWebSite(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneTutorial, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneFeedback, () => {
   currentPopup =  WA.ui.openPopup("popUpFeedback","Hier kannst du Feedback abgeben.",[
        {
            label: "Feedback",
            callback: (popup => {
                WA.nav.openCoWebSite(urlFeedback);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneFeedback, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})


WA.room.onEnterZone(zoneInfo, () => {
   currentPopup =  WA.ui.openPopup("popUpInfo","Willkommen im EVS-Teambüro! Sprich uns gerne direkt an und komm bei uns vorbei! \n Mehr zu Workadventure auf ...",[
        {
            label: "DB Planet",
            callback: (popup => {
                WA.nav.openTab(urlInfo);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneInfo, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})


WA.room.onEnterZone(zoneInfoOrder, () => {
   currentPopup =  WA.ui.openPopup("popUpInfoOrder","Ihr möchtet auch ein eigenes Teambüro mit kurzer Info zu euch? Hier könnt ihr dies beantragen.",[
        {
            label: "Digitalportal",
            callback: (popup => {
                WA.nav.openTab(urlInfoOrder);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneInfoOrder, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})
