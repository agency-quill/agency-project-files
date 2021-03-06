# Agency Basics
_Last updated 12/12/18_

This document covers the basic things you need to work on email and web assets in the Agency. If anything is confusing, or missing, please let us know. :) Thanks!

* [Applications](#applications)
	* [ADCore](#adcore)
	* [CMS](#cms)
	* [ConnectPoint](#connectpoint)
	* [GMP](#gmp)
	* [Lago](#lago)
	* [Lago4Web](#lago4web)
	* [ServiceNow](#servicenow)
* [File servers](#file-servers)
	* [Pages drive](#pages-drive)
		* [CAMPAIGN_RESOURCES](#campaign_resources)
		* [Personal_Projects](#personal_projects)
		* [Quill](#quill)
			* [Email](#email)
			* [WebAd](#webad)
		* [Resources](#resources)
		* [File archiving/restoring](#file-archivingrestoring)
	* [Preview server](#preview-server)
	* [Push server](#push-server)
		* [`00_IMMEDIATE`](#00_immediate)
		* [Scheduled deployment](#scheduled-deployment)
* [Production processes](#production-processes)
* [Terminology](#terminology)

## Applications
We use several applications to build and manage email and web assets. Here are overviews of the basic functions of each.

### ADCore
ADCore is one half of the Quill content management system. It houses the html templates, modules and content (called offer codes) for email and web assets.

### CMS
The system we call CMS is actually named GCPS (Genesis Customer Personalization System). It was originally called CMS and the new name never stuck. It is the other half (with ADCore) of the content management system. CMS establishes the rules that the back-end uses to assemble emails and render web assets based on user data.

### ConnectPoint
ConnectPoint is a database tool used company-wide. For the Agency, the primary use of ConnectPoint is to generate web requests. Web specialists create the web requests, including mockups to provide creative direction. This process also dynamically builds all of the ADCore offer codes needed for the requested assets.

### GMP
The Genesis Management Portal (GMP) houses a collection of dashboards used to manage various aspects of the website. The dashboards used by the Agency are to manage virtual directory redirects and the push updates to ADCore offer codes to the live site.

### Lago
Lago is a print catalog management tool. The print team use it to build catalog pages dynamically from product databases. The email and web processes have been tailored to use Lago as a workflow tool.

For more information see [Russ Brocato](mailto:Rosario.Brocato@quill.com) and [Zibi Szczalba](mailto:Zibi.Szczalba@quill.com).

### Lago4Web
Lago4Web is a web app ([Lago4Web](http://lagopap/LagoWeb/)) that is used in the workflow for the email and web asset proofing. There is a PowerPoint presentation on how to use Lago4Web here: [LagoWeb training_3_22_17.pptx](http://connectpoint.quillcorp.com/Dept/Agency/Shared%20Documents/LagoWeb%20training_3_22_17.pptx) (password required). [Russ Brocato](mailto:Rosario.Brocato@quill.com) and [Zibi Szczalba](mailto:Zibi.Szczalba@quill.com) support Lago4Web as well.

### ServiceNow
ServiceNow is the system we use to request technical assistance from the SDS (Staples Digital Solutions) team. For specific instructions on how to use it see the [How to request assistance from SDS](https://github.com/agency-quill/agency-project-files/blob/master/documentation/requesting-sds-help.md) document.

## File servers
In the Agency we primarily use 3 file servers. The __pages__, __preview__ and __push__ servers. In most cases, final web asset should be copied to all three.

### Pages drive
`//qlnnas/pages/`

The pages drive houses the majority of files generated by the Agency. For our purposes we are only interested in the `WebTeam` folder which houses all of the web and email assets.

#### CAMPAIGN_RESOURCES
`//qlnnas/pages/WebTeam/CAMPAIGN_RESOURCES`

When creative is high-profile, encompasses more than just a single channel, or has a time-span longer than a month it is stored in the `CAMPAIGN_RESOURCES` folder. It is organized by year and then by campaign. Beyond that there is no established structure. The campaign can house assets, concepts and working files. 

#### Personal_Projects
`//qlnnas/pages/WebTeam/Personal_Projects`

The `Personal_Projects` folder has folders for each member of the Agency. It serves as a personal workspace, to house files that don't have any other home or as a place to transfer files between Agency members. It's pretty much whatever you want it to be. Keep in mind that storage space isn't infinite, and `Personal_Projects` files are not part of our periodic archiving process. Please avoid storing large or duplicate creative files unnecessarily.

#### Quill
`//qlnnas/pages/WebTeam/Quill`

The `Quill` folder has the `Email` and `WebAd` folders. These are where the working files and final assets for email and web are stored.

##### Email
`//qlnnas/pages/WebTeam/Quill/Email`

The `Email` folder has all of the working files for emails.

For more information on the `Email` folder file hierarchy, see the [Folder Structure](https://github.com/agency-quill/agency-project-files/blob/master/documentation/folder-structure.md) documentation.

##### WebAd
`//qlnnas/pages/WebTeam/Quill/WebAd`

The `WebAd` folder has all of the working files for web assets (i.e. web ads, graphics and landing pages).

For more information on the `WebAd` folder file hierarchy, see the [Folder Structure](https://github.com/agency-quill/agency-project-files/blob/master/documentation/folder-structure.md) documentation.

#### Resources
`//qlnnas/pages/WebTeam/Resources`

The `Resources` folder houses files that are used to build web assets. There are documents, fonts, images, scripts, styles, templates, and more. Most of the scripts and styles are moving to our [GitHub](https://github.com/agency-quill/agency-project-files) page, but there are still many useful files in the `Resources` folder.

#### File archiving/restoring
We have a limited amount of server space so we need to periodically archive our files.

For more information on the file archiving/restoring process, see the [Archiving and restoring files](https://github.com/agency-quill/agency-project-files/blob/master/documentation/file-archiving-restoring.md) documentation.

### Preview server
`//qlnprteamsite1/QuillContent_Preview/Content/`

The preview server is a copy of the live site that is only accessible from within Quill. We use it to proof and debug web pages and graphics.

To render the most accurate appearance for proofing, all of the files, except those in the `content` folder, are updated with data from production nightly. The contents of the `content` folder are maintained solely by the Agency.

To preview your assets, copy your files from the pages drive to the preview server. Use the path they will have in production. The assets will be available via web browser at `http://qpreview.quillcorp.com/content/` + the unique path to the files.

##### Examples
`http://qpreview.quillcorp.com/content/index/resource-center/healthcare/exam-surgical-gloves/default.cshtml`

`http://qpreview.quillcorp.com/content/iw/adv/2018/12/015/default.cshtml`

Files that will be visible to search engines are placed in the `index` folder, those that don't need to be indexed are placed in the `iw` folder.

_Files should not be worked on from the preview server. All work should be done on the pages drive._

_The files on the preview server should not be used as pickups, or to make edits. They may not be the final versions. All work should be done using files found on the pages drive._

### Push server
`//contentsrvr/imagepush/new_content/PROD_WEB_QUILL`

Copying files to the push server is how we get them posted to the live site. When we copy a file to the push server, it gets copied to the 11 Quill servers and sent to [Akamai](https://www.akamai.com/) to copy throughout their network.

Inside the push server root folder are a series of folders that begin with 2-digit numbers. The ones we are concerned with run from 00 to 70. Each one is a copy of the folders on the production servers.

_Not all of the folders in production are in the push folders. You may need to add, or recreate folders_

#### `00_IMMEDIATE`
This is the primary push folder. Files dropped into this folder are copied to Quill production and Akamai servers then deleted. This process runs every minute but can take up to 10 minutes to finish.

_Please be careful. We have the ability to delete files from production and the push server, but not folders_

#### Scheduled deployment
The `10_Monday` folder through the `70_Sunday` folder are for delayed deployment. If a web asset needs to be updated on a particular day, drop the file(s) in the folder of that day. This means we can only schedule deployments a week in advance.

Prior to the first push of the day, the push process copies all of the files from the folder for that day of the week (e.g. `20_Tuesday`) to the `00_IMMEDIATE` folder.

## Production processes
Coming soon.

## Terminology
For Quill and Agency acronyms and terminology please see the [Agency Terms](https://github.com/agency-quill/agency-project-files/blob/master/documentation/agency-terms.md) document.