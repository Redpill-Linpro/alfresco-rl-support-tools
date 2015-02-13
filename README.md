# Alfresco Support Tools
------------------------

Here is a collection of different support tools which may come in handy. No warranty or guarantee is given. Use at own risk!

## Building
-----------
Build with

* mvn clean package

## Installation 
Each module have its own installation instructions

## Reset Site Dashboard
-----------------------
This tool is used to recreate surf-config for a site. We have seen from time to time issues with sites where site dashboards get corrupted or is missing.

The error is usally identified by the following log message in Share:

15:20:56,078 ERROR [org.alfresco.web.site] [ajp-bio-8010-exec-205] javax.servlet.ServletException: Could not resolve view with name 'site/xxx/dashboard' in servlet with name 'Spring Surf Dispatcher Servlet'
