(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{559:function(e,t,a){"use strict";a.r(t);var o=a(28),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-to-the-latest-version-of-bagisto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-the-latest-version-of-bagisto"}},[e._v("#")]),e._v(" Upgrade to the latest version of Bagisto")]),e._v(" "),a("p",[e._v("To upgrade your current version to the latest version of Bagisto, you need to follow some steps,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("First, you need to download the latest version of Bagisto.")])]),e._v(" "),a("li",[a("p",[e._v("You can download Bagisto from the following links,")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://bagisto.com/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download From Official Bagisto Site"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/bagisto/bagisto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download From Github"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("After downloading the latest version, run the specified commands in the terminal,")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" create-project\n")])])])]),e._v(" "),a("li",[a("p",[e._v("After the command has been executed, now go to your "),a("code",[e._v(".env")]),e._v(" file, provide your old project database credentials for which you want to upgrade Bagisto, and run the following command,")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("php artisan optimize\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- OR")]),e._v("\n\nphp artisan config:cache\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Now, your new changes have been cached and now your project is ready to run the migrate command,")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("php artisan migrate\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Here we have not provided you the seeder command because the seeder command always resets all the settings, categories and etc. If some tables need default settings then we advise you to add manually.")])])]),e._v(" "),a("li",[a("p",[e._v("Now, its time to create a symlink so that public assets can be linked to storage,")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("php artisan storage:link\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Copy all the content of the previous version's folder (e.g. "),a("code",[e._v("old-project/storage/app/public")]),e._v(") to the latest version's folder (e.g. "),a("code",[e._v("new-project/storage/app/public")]),e._v(").")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If your existing project also depends on some local storage, or you have changed some paths, or you want previous logs also then make sure you add all those also.")])])]),e._v(" "),a("li",[a("p",[e._v("Once this is finished run the following command to publish your new files,")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("php artisan vendor:publish --all\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Don't use the "),a("code",[e._v("--force")]),e._v(" flag, this will reset all your views. Use only when you know what you are doing.")])])])]),e._v(" "),a("p",[e._v("You are now at the latest version. Still, we want to mention that if you have done a lot of customizations then that portion of compatibility should be handled at your end.")])])}),[],!1,null,null,null);t.default=s.exports}}]);