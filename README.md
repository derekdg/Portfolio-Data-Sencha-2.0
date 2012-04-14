[Portfolio-Data-Sencha-2.0](http://derekdg.com/Portfolio-Data-Sencha-2.0/index.html)
=============================

Web Site Overview
-----------------------------

This mobile site is a proof-of-concept, playground, etc. for accessing the Google Finance API. After user authentication, the page flow is as follows:

1. Home page lists the user's Google Finance portfolios
2. Next page lists the selected portfolio's positions 
3. Final page lists the selected position's transactions

Technology
-----------------------------

- Framework: [Sencha Touch 2.0](http://www.sencha.com/products/touch)
- Authentication: Uses the [Google AuthSub](https://developers.google.com/accounts/docs/AuthSub) authorization process
- Stock Data: Uses [Yahoo! Query Language (YQL)](http://developer.yahoo.com/yql/) to get the last trade information on the positions


Disclaimer!
-----------------------------

This project is very much a work in progress. It is not near complete as far as code quality/testability/etc. It was meant to try out the [Google Finance API](https://developers.google.com/finance/) (Deprecated).