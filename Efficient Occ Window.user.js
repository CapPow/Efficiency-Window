// ==UserScript==
// @name         Efficient Occ Window
// @namespace    http://tampermonkey.net/
// @version      1.51
// @description  Make the Occ Window More Efficient for Direct From Image Data Entry
// @author      calebadampowell@gmail.com
// @match       http://sernecportal.org/portal/collections/editor/*
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @updateURL   https://github.com/CapPow/Efficiency-Window/raw/master/Efficient%20Occ%20Window.user.js
// @noframes
// ==/UserScript==
//Function defines
function Fireup(){
var cookiecheck = getCookie("efficientcookie");
    if (cookiecheck !='0') {
        document.cookie = "efficientcookie=0";
        var navFwdOccIndex = (document.getElementsByName("occindex")[2].value);
        var thisCollId = +collId;
         window.location = 'http://sernecportal.org/portal/collections/editor/occurrenceeditor.php?csmode=0&occindex=' + navFwdOccIndex + '&occid=0&collid=' + thisCollId;
    }else{

        substrateDiv.style.display = "none";
        associatedTaxaDiv.style.display = "none";
        verbatimAttributesDiv.style.display = "none";
        dynamicPropertiesDiv.style.display = "none";
        lifeStageDiv.style.display = "none";
        sexDiv.style.display = "none";
        individualCountDiv.style.display = "none";
        samplingProtocolDiv.style.display = "none";
        preparationsDiv.style.display = "none";
        reproductiveConditionDiv.style.display = "none";
        establishmentMeansDiv.style.display = "none";
        typeStatusDiv.style.display = "none";
        dispositionDiv.style.display = "none";
        occurrenceIdDiv.style.display = "none";
        fieldNumberDiv.style.display = "none";
        ownerInstitutionCodeDiv.style.display = "none";
        basisOfRecordDiv.style.display = "none";
        languageDiv.style.display = "none";
        labelProjectDiv.style.display = "none";
        duplicateQuantityDiv.style.display = "none";
        identificationQualifierDiv.style.display = "none";
        identifiedByDiv.style.display = "none";
        dateIdentifiedDiv.style.display = "none";
        municipalityDiv.style.display = "none";
        dupesDiv.style.display = "none";
        processingStatusDiv.style.display = "none";
        //scientificNameAuthorshipDiv.style.display= "none";Commented out to allow Ref. checks on illegible Handwriting
        familyDiv.style.display= "none";
        ometidDiv.style.display= "none";
        occurrenceRemarksDiv.style.display= "none";
        habitatDiv.style.display= "none";
        institutionCodeDiv.style.display= "none";
        collectionCodeDiv.style.display= "none";
        dataGeneralizationsDiv.style.display= "none";
        
        var itm = document.getElementById('activeimg-1');  //annotation check window (tiny photo)
        var dest = document.getElementById('labeldiv-1');
        var cln = itm.cloneNode(true);
        cln.style.width = '25%';
        cln.style.height = 'auto';
        dest.insertBefore(cln, dest.childNodes[2]);
        fieldset();
        jQuery(document).ready(function($) {
        SetZoom();
        prefetch();
        });
    }}


function fieldset(){
    var cookiechecksciName = getCookie("efficientcookiesciName");
    var cookiecheckstaName = getCookie("efficientcookiestaName");
    if (document.getElementById("ffsciname").value === ""){
        if(cookiechecksciName === undefined){document.getElementById('ffsciname').focus();
                                      }else{document.getElementById('ffsciname').value = getCookie("efficientcookiesciName");
                                            document.getElementById('ffsciname').focus();
                                            document.getElementById('ffsciname').select();}
    }
    else if (document.getElementById("ffstate").value === ""){
        if(cookiecheckstaName === undefined){document.getElementById('ffstate').focus();
                                      }else{document.getElementById('ffstate').value = getCookie("efficientcookiestaName");
                                            document.getElementById('ffstate').focus();
                                            document.getElementById('ffstate').select();}
    }
    else{document.getElementById("ffcounty").focus();}
}
function prefetch(){
    var nxtOccIndex = +(document.getElementsByName("occindex")[2].value)+1;
     var i = document.createElement('iframe');
        var thisCollId = +collId;
    (function(){
 setTimeout(setSrc, 5);
    })();
function setSrc(){
//    var curFoc = document.activeElement; Testing methods to avoid focus theft.
//    window.onblur = curFoc.focus();
    i.style.display = 'none';
    i.onload = function() { i.parentNode.removeChild(i); };
    i.src = 'http://sernecportal.org/portal/collections/editor/occurrenceeditor.php?csmode=0&occindex=' + nxtOccIndex + '&occid=0&collid=' + thisCollId;
    document.body.appendChild(i);
}}
//Would like to prefetch next img while typing in first. Occasionally had issues with this stealing focus while typing. Maybe solved (unknown how)
function Submit(){
   var now = new Date();
   var time = now.getTime();
     time += 20 * 1000;     // first value is in seconds
     now.setTime(time);
    document.cookie = "efficientcookie=1";
    var sciName= document.getElementById("ffsciname").value;
    document.cookie = "efficientcookiesciName="+ sciName+ '; expires=' + now.toUTCString() + '; path=/';
    var staName = document.getElementById("ffstate").value;
    document.cookie = "efficientcookiestaName="+ staName+ '; expires=' + now.toUTCString() + '; path=/';
    var clickme= document.getElementsByName('submitaction')[2].click(clickme);}

function SetZoomOut(){
 var FrameImg = document.getElementById('activeimg-1');
     FrameImg.style.width = '240px';
     FrameImg.style.height = '360px';
     FrameImg.style.left = '137px';
     FrameImg.style.top = '0px';
}
function SetZoom(){
  var Img = document.getElementById('activeimg-1');
  var FrameImg = document.getElementById('imgtd');
     Img.style.width = '218%';
     Img.style.height = 'auto';
     Img.style.left = '-117%';
     Img.style.top = '-215%';
    }

function SetUpZoom(){
  var Img = document.getElementById('activeimg-1');
     var nudgeup = +document.getElementById('activeimg-1').style.top.match(/\d+/)-20;
     Img.style.width = '218%';
     Img.style.height = 'auto';
     Img.style.top = '-'+nudgeup+'%';
    }

function SetLeftZoom(){
  var Img = document.getElementById('activeimg-1');
     var nudgeleft = +document.getElementById('activeimg-1').style.left.match(/\d+/)-20;
     Img.style.width = '218%';
     Img.style.height = 'auto';
     Img.style.left = '-'+nudgeleft+'%';
    }


function doc_keyUp(e) {
        if (e.ctrlKey){
     switch (e.keyCode) {
        case 39:
            SetZoom();
            break;
        case 37:
       SetLeftZoom();
            break;
        case 38:
             {
                 SetUpZoom();
             }
            break;
        case 40:
             {
 SetZoomOut();
             }

            break;
        case 16:
             {
                 Submit();
             }
            break;
        default:
            break;
    }
  }
 }

document.addEventListener('keyup', doc_keyUp, false);
Fireup();
