# Alfresco Support Tools
------------------------

Here is a collection of different support tools which may come in handy. No warranty or guarantee is given. Use at own risk!

## Building
Build with

* mvn clean package

## Installation 
Each module have its own installation instructions

## Reset Site Dashboard
This tool is used to recreate surf-config for a site. We have seen from time to time issues with sites where site dashboards get corrupted or is missing.

The error is usally identified by the following log message in Share:

```
15:20:56,078 ERROR [org.alfresco.web.site] [ajp-bio-8010-exec-205] javax.servlet.ServletException: Could not resolve view with name 'site/xxx/dashboard' in servlet with name 'Spring Surf Dispatcher Servlet'
```

These issues can have one of many causes some are:
* Failed patch in an upgrade (Community or Enterprise)
* We have seen this several times when Community -> Enterprise upgrades have taken place
* Renaming of a site (changing its short name/id)
* Restoring a deleted site (this error comes from a failed patch or upgrade)

### How to install
* Copy the built jar file into tomcat-share/shared/lib/ and restart Share

### How to use
* Note the site shortName
* Note the preset used for the site (the st:sitePreset property on the site node). Default is "site-dashboard" for Collaboration Sites
* Call the url 	http://localhost:8081/share/service/rl/support/reset-site-dashboard?shortName=\<SITE\_SHORTNAME>&preset=<SITE\_PRESET>

