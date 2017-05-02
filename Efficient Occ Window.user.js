// ==UserScript==
// @name         Efficient Occ Window
// @namespace    http://tampermonkey.net/
// @version      1.46
// @description  Make the Occ Window More Efficient for Direct From Image Data Entry
// @author      calebadampowell@gmail.com
// @match       http://sernecportal.org/portal/collections/editor/*
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @updateURL   https://github.com/CapPow/Efficiency-Window/raw/master/Efficient%20Occ%20Window.user.js

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
        scientificNameAuthorshipDiv.style.display= "none";
        familyDiv.style.display= "none";
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
    var cookiecheck1 = getCookie("efficientcookie1");
    if (document.getElementById("ffsciname").value === ""){
        if(cookiecheck1 === undefined){document.getElementById('ffsciname').focus();
                                      }else{document.getElementById('ffsciname').value = getCookie("efficientcookie1");
                                            document.getElementById('ffsciname').focus();
                                            document.getElementById('ffsciname').select();}
    }else{document.getElementById("ffstate").focus();}
}
function prefetch(){
    var nxtOccIndex = +(document.getElementsByName("occindex")[2].value)+1;
     var i = document.createElement('iframe');
        var thisCollId = +collId;
(function(){
 setTimeout(setSrc, 5);
    })();
function setSrc(){
    onblur=window.focus();
    i.style.display = 'none';
    i.onload = function() { i.parentNode.removeChild(i); };
    i.src = 'http://sernecportal.org/portal/collections/editor/occurrenceeditor.php?csmode=0&occindex=' + nxtOccIndex + '&occid=0&collid=' + thisCollId;
    document.body.appendChild(i);
}}
//I'm sure the above can be done better, but I don't know what i'm doing. The Goal is to stop the prefetch iframe from stealing focus and slowing onload events. Ideally, this would not be done with a hidden iframe.
function Submit(){
   var now = new Date();
   var time = now.getTime();
     time += 20 * 1000;     // first value is in seconds
     now.setTime(time);
    document.cookie = "efficientcookie=1";
    var SciName= document.getElementById("ffsciname").value;
    document.cookie = "efficientcookie1="+ SciName+ '; expires=' + now.toUTCString() + '; path=/';
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
